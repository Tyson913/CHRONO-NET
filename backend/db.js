 import {ref, get} from "./firebase.js";

async function getDatabaseData (){
    const snapshot = await get(ref(db, "internetArchive"));
    return snapshot.exists() ?  snapshot.val() : null;
}

const data = await getDatabaseData()
const years = {};

for (const key in data) {
    years[key] = data[key];
}

export{data};
