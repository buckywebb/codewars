/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/

/* My Answer */
const getMiddle = s => s.length % 2 === 0 ? s[s.length/2 - 1] + s[s.length/2] : s[Math.ceil(s.length/2 - 1)]

// string length % 2 === 0 to determine even or odd
// if even, return letters at s[s.length/2] and s[s.length/2 + 1]
// if odd, return letter at s[Math.ceil(s.length/2)]