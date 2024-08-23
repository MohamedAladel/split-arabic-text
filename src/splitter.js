const arabicCharMappings = {
  ا: {
    isolated: "\u0627",
    final: "\uFE8E",
    initial: "\uFE8D",
    medial: "\uFE8E",
  },
  ب: {
    isolated: "\u0628",
    initial: "\uFE91",
    medial: "\uFE92",
    final: "\uFE90",
  },
  ت: {
    isolated: "\u062A",
    initial: "\uFE97",
    medial: "\uFE98",
    final: "\uFE96",
  },
  ث: {
    isolated: "\u062B",
    initial: "\uFE9B",
    medial: "\uFE9C",
    final: "\uFE9A",
  },
  ج: {
    isolated: "\u062C",
    initial: "\uFE9F",
    medial: "\uFEA0",
    final: "\uFE9E",
  },
  ح: {
    isolated: "\u062D",
    initial: "\uFEA3",
    medial: "\uFEA4",
    final: "\uFEA2",
  },
  خ: {
    isolated: "\u062E",
    initial: "\uFEA7",
    medial: "\uFEA8",
    final: "\uFEA6",
  },
  د: { isolated: "\u062F", final: "\uFEAA" },
  ذ: { isolated: "\u0630", final: "\uFEAC" },
  ر: { isolated: "\u0631", final: "\uFEAE" },
  ز: { isolated: "\u0632", final: "\uFEB0" },
  س: {
    isolated: "\u0633",
    initial: "\uFEB3",
    medial: "\uFEB4",
    final: "\uFEB2",
  },
  ش: {
    isolated: "\u0634",
    initial: "\uFEB7",
    medial: "\uFEB8",
    final: "\uFEB6",
  },
  ص: {
    isolated: "\u0635",
    initial: "\uFEBB",
    medial: "\uFEBC",
    final: "\uFEBA",
  },
  ض: {
    isolated: "\u0636",
    initial: "\uFEBF",
    medial: "\uFEC0",
    final: "\uFEBE",
  },
  ط: {
    isolated: "\u0637",
    initial: "\uFEC3",
    medial: "\uFEC4",
    final: "\uFEC2",
  },
  ظ: {
    isolated: "\u0638",
    initial: "\uFEC7",
    medial: "\uFEC8",
    final: "\uFEC6",
  },
  ع: {
    isolated: "\u0639",
    initial: "\uFECB",
    medial: "\uFECC",
    final: "\uFECA",
  },
  غ: {
    isolated: "\u063A",
    initial: "\uFECF",
    medial: "\uFED0",
    final: "\uFECE",
  },
  ف: {
    isolated: "\u0641",
    initial: "\uFED3",
    medial: "\uFED4",
    final: "\uFED2",
  },
  ق: {
    isolated: "\u0642",
    initial: "\uFED7",
    medial: "\uFED8",
    final: "\uFED6",
  },
  ك: {
    isolated: "\u0643",
    initial: "\uFEDB",
    medial: "\uFEDC",
    final: "\uFEDA",
  },
  ل: {
    isolated: "\u0644",
    initial: "\uFEDF",
    medial: "\uFEE0",
    final: "\uFEDE",
  },
  م: {
    isolated: "\u0645",
    initial: "\uFEE3",
    medial: "\uFEE4",
    final: "\uFEE2",
  },
  ن: {
    isolated: "\u0646",
    initial: "\uFEE7",
    medial: "\uFEE8",
    final: "\uFEE6",
  },
  ه: {
    isolated: "\u0647",
    initial: "\uFEEB",
    medial: "\uFEEC",
    final: "\uFEEA",
  },
  و: { isolated: "\u0648", final: "\uFEEE" },
  ي: {
    isolated: "\u064A",
    initial: "\uFEF3",
    medial: "\uFEF4",
    final: "\uFEF2",
  },
  ء: { isolated: "\u0621" },
  آ: { isolated: "\u0622", final: "\uFE82" },
  أ: { isolated: "\u0623", final: "\uFE84" },
  ؤ: { isolated: "\u0624", final: "\uFE86" },
  إ: { isolated: "\u0625", final: "\uFE88" },
  ئ: {
    isolated: "\u0626",
    initial: "\uFE8B",
    medial: "\uFE8C",
    final: "\uFE8A",
  },
  ة: { isolated: "\u0629", final: "\uFE94" },
  ى: {
    isolated: "\u0649",
    final: "\uFEF0",
    initial: "\uFEF0",
    medial: "\uFEF0",
  },
  ـ: {
    isolated: "\u0640",
    initial: "\u0640",
    medial: "\u0640",
    final: "\u0640",
  }, // Tatweel
  لا: { isolated: "\uFEFB", final: "\uFEFC" }, // Lam-Alif ligature
  لآ: { isolated: "\uFEF5", final: "\uFEF6" }, // Lam-Alif Madda ligature
  لأ: { isolated: "\uFEF7", final: "\uFEF8" }, // Lam-Alif Hamza above ligature
  لإ: { isolated: "\uFEF9", final: "\uFEFA" }, // Lam-Alif Hamza below ligature
};

// Non-connecting characters
const nonConnectingChars = ["و", "ز", "ر", "ذ", "د", "ا", "آ", "أ", "إ", "ء"];
const diacriticalMarks = [
  "ً", // ARABIC FATHATAN
  "ٌ", // ARABIC DAMMATAN
  "ٍ", // ARABIC KASRATAN
  "َ", // ARABIC FATHA
  "ُ", // ARABIC DAMMA
  "ِ", // ARABIC KASRA
  "ّ", // ARABIC SHADDA
  "ْ", // ARABIC SUKUN
  "آ", // ARABIC MADDAH ABOVE
  "ٔ", // ARABIC HAMZA ABOVE
  "ٕ", // ARABIC HAMZA BELOW
  "ٖ", // ARABIC SUBSCRIPT ALEF
  "ٗ", // ARABIC INVERTED DAMMA
  "ٙ", // ARABIC MARK NOON GHUNNA
  "ٚ", // ARABIC ZWARAKAY
  "ٛ", // ARABIC VOWEL SIGN SMALL V ABOVE
  "ٜ", // ARABIC VOWEL SIGN INVERTED SMALL V ABOVE
  "ٝ", // ARABIC VOWEL SIGN DOT BELOW
  "ٞ", // ARABIC REVERSED DAMMA
  "ٟ", // ARABIC FATHA WITH TWO DOTS
  "ٰ", // ARABIC WAVY HAMZA BELOW
];
// Check if a character is Arabic
function isArabic(char) {
  return char in arabicCharMappings;
}

// Check if a character can connect to the previous character
function canConnectToPrevious(char) {
  return !nonConnectingChars.includes(char);
}

// Check if a character can connect to the next character
function canConnectToNext(char) {
  return isArabic(char) && arabicCharMappings[char].initial !== undefined;
}
function getPositionalChar(char, prevChar, nextChar) {
  if (!isArabic(char)) return char;

  // Handle Lam-Alif ligatures
  if (char === "ل" && nextChar && ["ا", "آ", "أ", "إ"].includes(nextChar)) {
    const ligature = char + nextChar;
    const ligatureMapping = arabicCharMappings[ligature];

    // Ensure that the next character is not processed again
    if (ligatureMapping) {
      return prevChar && isArabic(prevChar) && canConnectToPrevious(prevChar)
        ? ligatureMapping.final
        : ligatureMapping.isolated;
    }
  }

  const mapping = arabicCharMappings[char];
  const connectsToPrev =
    prevChar && isArabic(prevChar) && canConnectToPrevious(prevChar);
  const connectsToNext =
    nextChar && isArabic(nextChar) && canConnectToNext(char);
  const prevIsNonConnecting =
    prevChar && isArabic(prevChar) && nonConnectingChars.includes(prevChar);

  // Handle non-connecting characters (including `ا`, `ر`, etc.)
  if (nonConnectingChars.includes(char)) {
    return connectsToPrev ? mapping.final : mapping.isolated;
  }

  // General character handling
  if (connectsToPrev && connectsToNext && !prevIsNonConnecting)
    return mapping.medial;
  if (connectsToPrev && (!connectsToNext || prevIsNonConnecting))
    return mapping.final;
  if (connectsToNext) return mapping.initial;

  return mapping.isolated;
}

function processText(array, dir) {
  const result = [];
  array.forEach((text) => {
    const chars = Array.from(text.text);
    if (text.language === "arabic") {
      if (dir === "rtl" || dir === "RTL") {
        for (let i = 0; i < chars.length; i++) {
          let prevChar = i > 0 ? chars[i - 1] : null;
          const currentChar = chars[i];
          let nextChar = i < chars.length - 1 ? chars[i + 1] : null;

          if (diacriticalMarks.includes(currentChar) && prevChar === "ل" && ["ا", "آ", "أ", "إ"].includes(nextChar) ) {
            i++
          }
          if (diacriticalMarks.includes(prevChar)) {
            prevChar = i > 0 ? chars[i - 2] : null;
          }
          if (diacriticalMarks.includes(nextChar)) {
            nextChar = i < chars.length - 1 ? chars[i + 2] : null;
          }
          
          const processedChar = getPositionalChar(
            currentChar,
            prevChar,
            nextChar
          );

          result.push({
            original: currentChar,
            processed: processedChar,
            isArabic: isArabic(currentChar),
          });

          // Skip next character if a ligature was used
          if (currentChar === "ل" && ["ا", "آ", "أ", "إ"].includes(nextChar) && !diacriticalMarks.includes(i < chars.length - 1 ? chars[i + 1] : null)) {
            i++;

          }
          // if (currentChar === "ل" && diacriticalMarks.includes(nextChar) && ["ا", "آ", "أ", "إ"].includes(chars.length - 1 ? chars[i + 2] : null)) {
          //   i++;

          // }

        }
      } else {
        for (let i = chars.length - 1; i >= 0; i--) {
          let prevChar = i > 0 ? chars[i - 1] : null;
          const currentChar = chars[i];
          let nextChar = i < chars.length - 1 ? chars[i + 1] : null;


          // if (diacriticalMarks.includes(currentChar) && prevChar === "ل" && ["ا", "آ", "أ", "إ"].includes(nextChar) ) {
          //   i--
          // }
          if (diacriticalMarks.includes(prevChar)) {
            prevChar =i > 0 ? chars[i - 2] : null;
          }
          if (diacriticalMarks.includes(nextChar)) {
            nextChar = i < chars.length - 1 ? chars[i + 2] : null;
          }
          


          // Skip next character if a ligature was used
          if (
            (prevChar === "ل" && ["ا", "آ", "أ", "إ"].includes(currentChar)) 
            // ||
            // diacriticalMarks.includes(currentChar)
          ) {
            continue;
          } else {
            const processedChar = getPositionalChar(
              currentChar,
              prevChar,
              nextChar
            );

            result.push({
              original: currentChar,
              processed: processedChar,
              isArabic: isArabic(currentChar),
            });
          }
        }
      }

      result.push({
        original: " ",
        processed: " ",
        isArabic: false,
      });
    } else {
      if (dir === "rtl" || dir === "RTL") {
        for (let n = chars.length - 1; n >= 0; n--) {
          result.push({
            original: chars[n],
            processed: chars[n],
            isArabic: false,
          });
        }
      } else {
        for (let n = 0; n < chars.length; n++) {
          result.push({
            original: chars[n],
            processed: chars[n],
            isArabic: false,
          });
        }
      }
      result.push({
        original: " ",
        processed: " ",
        isArabic: false,
      });
    }
  });

  return result;
}

function separateTextByLanguage(text) {
  // Regular expressions to detect Arabic and English characters
  const arabicPattern = /[\u0600-\u06FF]/;
  const englishPattern = /[A-Za-z]/;

  let result = [];
  let currentParagraph = "";
  let currentLanguage = null;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    // Determine the language of the current character
    let charLanguage = arabicPattern.test(char)
      ? "arabic"
      : englishPattern.test(char)
      ? "english"
      : null;

    if (charLanguage === null) {
      // Add non-alphabetic characters (like spaces and punctuation) directly to currentParagraph
      currentParagraph += char;
    } else {
      // Handle language transition
      if (charLanguage !== currentLanguage) {
        // Save the current paragraph if it's not empty
        if (currentParagraph.trim()) {
          result.push({
            language: currentLanguage,
            text: currentParagraph.trim(),
          });
        }
        // Start a new paragraph with the current character
        currentParagraph = char;
        currentLanguage = charLanguage;
      } else {
        // Continue accumulating text for the current language
        currentParagraph += char;
      }
    }
  }

  // Push the last accumulated paragraph
  if (currentParagraph.trim()) {
    result.push({ language: currentLanguage, text: currentParagraph.trim() });
  }

  return result;
}


function splitArabicText(text, dir) {
  const separateTexted = separateTextByLanguage(text);
  return processText(separateTexted, dir);
}

function getFormattedText(text, dir) {
  const splitText = splitArabicText(text, dir);
  return splitText.map((item) => item.processed).join("");
}

module.exports = {
  getFormattedText
};