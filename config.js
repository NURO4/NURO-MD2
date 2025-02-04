const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "onUXSTbQ#dIP3p8elIg7TNzAwIUxDR-Ot8XrDYm-fIQ-LD4yYd0E",  // ADD Your Session Id 
MONGODB: process.env.MONGODB || "mongodb://mongo:griNuBfTLanCvIutOCcoRFncDGSahpkr@viaduct.proxy.rlwy.net:57778",
OWNER_REACT: process.env.OWNER_REACT || "false", //add true or false
BOT_NAME: process.env.BOT_NAME || "nuro",
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!CUSTOM-SETTING-CONFIG=====================
ANTI_LINK: process.env.ANTI_LINK || "true", //add true or false
ANTI_BAD: process.env.ANTI_BAD || "true", //add true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", //add true or false
///===============================================DONT-CHANGE-API=========================================
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!ALIVE-CONFIG================================
};
