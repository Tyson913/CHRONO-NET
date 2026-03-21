//
// naka async/await function
// SEQUENCE: Gemini (to generate info/data) -> GPT to extract the data
import {ref, query, limitToLast, get } from "firebase/database";
import { db } from "./firebase.js"; 
import { extractInternetData } from "./gpt" 
import { generateInternetData } from "./gemini"

const currentYear = new Date().getFullYear;

const ancestorKey = "internetArchive";
const parentRef = ref(db, ancestorKey)
const lastKeyQuery = query(parentRef, limitToLast(1));

let lastKey;
get(lastKeyQuery).then((snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        lastKey = Object.keys(data)[0];
    }
});

async function FormatData(param) {
    let data = await generateInternetData();
    return extractInternetData(data);
}

const scheduledYear = lastKey + 2;

let formattedData;
if (!currentYear === scheduledYear) {
    process.exit(0);
}
formattedData = FormatData(param);
export { formattedData };



