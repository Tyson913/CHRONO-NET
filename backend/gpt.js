import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function extractInternetData(internetData) {
    const response = await client.responses.create({
        model: "gpt-4.1-mini",
        input: ""
    });
    return response;
}

export const extractedInternetData = extractInternetData();

//