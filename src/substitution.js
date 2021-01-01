///// NO MATH IS REQUIRED FOR THIS ONE! :) /////
///// HOW TO ENCODE /////
// 1) convert to unicode
// 2) subtract 97:
// this is the position of the result character from alphabet
//
//// HOW TO DECODE ////
// 1) find character's position in the alphabet string
// 2) add 97:
// this is the unicode value of the result
//////

function hasUniqueLetters(input) {
  const usedLetters = {};

  for (const letter of input) {
    if (usedLetters[letter]) return false;
    usedLetters[letter] = true;
  }

  return true;
}

function substitution(input, alphabet, encode = true) {
  // handle errors
  if (
    !alphabet ||
    typeof alphabet !== "string" ||
    alphabet.length !== 26 ||
    !hasUniqueLetters(alphabet)
  )
    return false;

  // convert the input to lowercase and to an array by letter
  // alphabet should be lowercase
  inputArray = input.toLowerCase().split("");
  alphabet = alphabet.toLowerCase();

  const result = inputArray.reduce((acc, char) => {
    // ignore whitespace
    if (char === " ") return acc + " ";

    // encode or decode

    /*     const charCode = encode
      ? char.charCodeAt() - 97
      : alphabet.indexOf(char) + 97;

    // find the character to concatenate to acc
    if (encode) return acc + alphabet[charCode].toLowerCase();
    return acc + String.fromCharCode(charCode); */

    if (encode) {
      const charCode = char.charCodeAt() - 97;
      return acc + alphabet[charCode].toLowerCase();
    } else {
      const charCode = alphabet.indexOf(char) + 97;
      return acc + String.fromCharCode(charCode);
    }
  }, "");

  // return!
  return result;
}

module.exports = substitution;
