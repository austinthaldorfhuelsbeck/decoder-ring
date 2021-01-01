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

function substitution(input, alphabet, encode = true) {
  // handle errors
  if (!alphabet || typeof alphabet !== "string" || alphabet.length !== 26)
    return false;

  // convert the input to lowercase and to an array by letter
  inputArray = input.toLowerCase().split("");
  alphabet = alphabet.toLowerCase();

  const result = inputArray.reduce((acc, char) => {
    // ignore whitespace
    if (char === " ") return acc + " ";

    // encode or decode
    const charCode = encode
      ? char.charCodeAt() - 97
      : alphabet.indexOf(char) + 97;

    // find the character to concatenate to acc
    if (encode) return acc + alphabet[charCode].toLowerCase();
    return acc + String.fromCharCode(charCode);
  }, "");

  // return!
  return result;
}

module.exports = substitution;
