
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askGemini = async (prompt: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while trying to fetch that information. Please check your connection or try again.";
  }
};

export const getConceptExplanation = async (concept: string) => {
  const prompt = `Explain the Flutter concept of "${concept}" using React analogies. Include a short code snippet for both.`;
  return await askGemini(prompt);
};
