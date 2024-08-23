// src/index.js
const { getFormattedText } = require('./splitter');
function splitText(text, dir = 'rtl') {
    return getFormattedText(text, dir);
}

module.exports = splitText;