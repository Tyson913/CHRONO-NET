import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})


async function generateInternetData(inputtedyear) {
    const response = await ai.models.generateContent({
        model: "gemini-3.1-pro",
        contents: `Gen`
    })
    return response;
}






// if (yearInput == currentYear) {
//     //
// }
// else {
//     // mu actviate ang loader
//     // mu activate ang another ai
//     // mu kuan sa result
// }


// const express = require("express");
// const app = express();






