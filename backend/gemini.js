import { GoogleGenAI } from "@google/genai";


const API_KEY = "AIzaSyCJ9eoutIz3uuq82fxDdfGYC8QobL0O-i8";
const ai = new GoogleGenAI({
    apiKey: API_KEY
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






