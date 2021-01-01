/*
  ///// !!! MATH !!! /////
  The unicode for "a" is 97, so we can
  convert each character to unicode,
  1) subtract 96,
  what's left is the order # in the alphabet of the character.
  i.e. a = 1, b = 2, etc
  2) if character is j or above, subtract 1 !!!
  This problem can now be solved by dividing n by 5,
  the row is the quotient plus one and the column is the remainder. So:
  3) row = (n + 4) / 5 ... rounded down to nearest whole
  4) column = n % 5
     if (column === 0) column = 5
*/

function polyEncode(input) {
  //// ENCODER
  const inputArray = input.toLowerCase().split("");
  const result = inputArray.reduce((acc, char) => {
    const charCode = char.charCodeAt();
    // ignore punctuation, return whitespace
    if (charCode == 32) return acc + char;
    if (charCode < 97 || charCode > 122) return acc;

    // convert to unicode, subtract 96
    // if j or above, subtract 1 extra
    let charNum = charCode - 96;
    if (charNum >= 10) charNum--;

    // find row + column
    let row = Math.floor((charNum + 4) / 5);
    let column = charNum % 5;
    if (column === 0) column = 5;

    // concatenate onto last result
    return acc + column.toString() + row.toString();
  }, "");
  return result;
}

function polyDecode(input) {
  //// DECODER
  let result = "";
  // this time, split by word
  const inputArray = input.split(" ");

  // for each word...
  for (let word of inputArray) {
    // check if even
    if (word.length % 2 !== 0) return false;

    // convert to array, break word array into pieces of 2 chars each
    let wordArray = [];
    for (let i = 0; i < word.length; i += 2) {
      wordArray.push(word.substr(i, 2));
    }

    // decode each char in the word with reduce
    const wordDecoded = wordArray.reduce((acc, char) => {
      const column = parseInt(char[0]);
      const row = parseInt(char[1]);

      // convert from unicode,
      // if j or above, add 1 extra
      let charCode = (row - 1) * 5 + column + 96;
      if (charCode > 105) charCode++;

      // return early in case of i/j
      if (charCode === 105) return acc + "i/j";
      return acc + String.fromCharCode(charCode);
    }, "");

    // join back together for finished string
    result += `${wordDecoded} `;
  }
  // there's one extra whitespace at the end!
  return result.trim();
}

function polybius(input, encode = true) {
  // catches an error if input is empty
  try {
    if (!input) throw "No input provided";
    // encode or decode
    const result = encode ? polyEncode(input) : polyDecode(input);
    return result;
  } catch (error) {
    return `ERROR: ${error}`;
  }
}

module.exports = polybius;
