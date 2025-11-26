import { GoogleGenAI, Type } from "@google/genai";
import { Review } from '../types';

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const fetchGoogleReviews = async (): Promise<Review[]> => {
  const ai = getAiClient();
  
  // Improved prompt: target relationship counsellors specifically
  const prompt = `
    Using Google Maps, find a top-rated relationship counsellor or marriage therapist in San Francisco.
    Select one with good ratings.
    Retrieve 3 to 4 patient reviews for this practice.
    
    For each review, extract the Author Name, Rating, Date, and Review Text.
    
    Output the reviews in this EXACT format:
    
    START_REVIEW
    Author: [Author Name]
    Rating: [Rating Number]
    Date: [Date]
    Text: [Review Text]
    END_REVIEW
    
    Do not add any introductory or concluding text. Just the reviews.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleMaps: {} }],
      }
    });

    let mapUrl = "https://www.google.com/maps";
    if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
        const chunks = response.candidates[0].groundingMetadata.groundingChunks;
        // Prioritize maps URI, then web URI
        const mapChunk = chunks.find(c => (c as any).maps?.uri) || chunks.find(c => c.web?.uri); 
        if (mapChunk) {
            mapUrl = (mapChunk as any).maps?.uri || mapChunk.web?.uri || mapUrl;
        }
    }

    const text = response.text || "";
    const reviews: Review[] = [];
    
    // Split by START_REVIEW. 
    const reviewBlocks = text.split("START_REVIEW").slice(1);

    reviewBlocks.forEach((block, index) => {
      // Remove markdown bold/italic markers if the model adds them
      const cleanBlock = block.replace(/[*_]{2,}/g, '');
      
      // Regex to capture fields, allowing for loose whitespace and case insensitivity
      const authorMatch = cleanBlock.match(/Author:\s*(.+)/i);
      const ratingMatch = cleanBlock.match(/Rating:\s*(\d+)/i);
      const dateMatch = cleanBlock.match(/Date:\s*(.+)/i);
      const textMatch = cleanBlock.match(/Text:\s*([\s\S]+?)(?:END_REVIEW|$)/i);

      if (authorMatch && ratingMatch && textMatch) {
        reviews.push({
          id: `google-gen-${index}`,
          author: authorMatch[1].trim(),
          rating: parseInt(ratingMatch[1], 10),
          text: textMatch[1].trim(),
          date: dateMatch ? dateMatch[1].trim() : 'Recent',
          source: 'Google',
          url: mapUrl
        });
      }
    });

    if (reviews.length === 0) {
      console.warn("Gemini response did not contain structured reviews. Response text:", text);
      // We return empty array so the UI can fall back to mock data gracefully
      return [];
    }
    
    return reviews;

  } catch (error) {
    console.error("Error fetching Google reviews via AI:", error);
    return []; 
  }
};
