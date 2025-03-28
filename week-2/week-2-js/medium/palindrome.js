/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase().split("").filter(char => /[a-z]/.test(char)).join("");
  const reversedStr = [...lowerStr].reverse().join("");

  return lowerStr === reversedStr;
}

module.exports = isPalindrome;
