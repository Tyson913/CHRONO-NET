
import {data} from "../backend/db.js"

const yearToread = document.getElementById("yearInputBox").value;


const headers = ["Top Searches", "Top Visited Websites", "Viral Video", "Top Meme", "Top Music Hits", "Major Internet Event"]
const tSearches = data[`${yearToread}`].topSearches;
const tVid = data[`${yearToread}`].viralVideo;
const tWebsites = data[`${yearToread}`].topVisitedWebsites;
const tMeme = data[`${yearToread}`].topMeme;
const mHits = data[`${yearToread}`].topMusicHits;
const mInternetEvent= data[`${yearToread}`].majorInternetEvent;


export {tSearches};


const tSearchesCon = document.getElementById("topSearchCon") ;
const tWebsitesCon = document.getElementById("topVisitedSitesCon");
const trendVidCon = document.getElementById("trendingVidCon");
const tMemeCon = document.getElementById("memeCon");
const mHitsCon = document.getElementById("musicHitsCon");
const mInternetEventCon = document.getElementById("majorInternetEventCon");


mHits.forEach(element => {
    
});




