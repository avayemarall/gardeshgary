// export function generateSlug(text: string) {
//   const persianToEnglishMap: Record<string, string> = {
//     ا: "a",
//     آ: "a",
//     ب: "b",
//     پ: "p",
//     ت: "t",
//     ث: "s",
//     ج: "j",
//     چ: "ch",
//     ح: "h",
//     خ: "kh",
//     د: "d",
//     ذ: "z",
//     ر: "r",
//     ز: "z",
//     ژ: "zh",
//     س: "s",
//     ش: "sh",
//     ص: "s",
//     ض: "z",
//     ط: "t",
//     ظ: "z",
//     ع: "a",
//     غ: "gh",
//     ف: "f",
//     ق: "gh",
//     ک: "k",
//     گ: "g",
//     ل: "l",
//     م: "m",
//     ن: "n",
//     و: "v",
//     ه: "h",
//     ی: "y",
//     مو:"mo",
//     ء: "",
//     "ٔ": "",
//     "‌": "-",
//     " ": "-",
//     "،": "",
//     ".": "",
//     "؛": "",
//     "!": "",
//     "?": "",
//   };

//   const diacriticsMap: Record<string, string> = {
//     "َ": "a",
//     "ِ": "e",
//     "ُ": "o",
//     "ً": "an",
//     "ٌ": "on",
//     "ٍ": "en",
//     "ْ": "",
//     "ّ": "",
//   };

//   return text
//     .split("")
//     .map((char: string) => {
//       if (char in persianToEnglishMap) return persianToEnglishMap[char];
//       if (char in diacriticsMap) return diacriticsMap[char];
//       return char;
//     })
//     .join("")
//     .replace(/[^a-zA-Z0-9\-]+/g, "-")
//     .replace(/--+/g, "-")
//     .replace(/^-+|-+$/g, "")
//     .toLowerCase();
// }
export function generateSlug(text:string) {
  return text
    .toString()
    .normalize('NFD')                    
    .replace(/[\u064B-\u065F\u0610-\u061A]/g, '') 
    .replace(/[\u200C]/g, '-')            
    .replace(/[^a-zA-Z0-9\u0600-\u06FF]+/g, '-') 
    .replace(/--+/g, '-')                 
    .replace(/^-+|-+$/g, '')              
    .toLowerCase();
}