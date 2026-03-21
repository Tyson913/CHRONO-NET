import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
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