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

function polybius(input, encode = true) {
  const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let result = "";
  // catches an error if input is empty
  try {
    if (!input) throw "No input provided";
  } catch (error) {
    return `ERROR: ${error}`;
  }

  if (encode) {
    //// ENCODER
    const inputArray = input.toLowerCase().split("");
    result = inputArray.reduce((acc, char) => {
      // ignore punctuation, return whitespace
      if (punctuation.includes(char)) return acc + "";
      if (char === " ") return acc + char;

      // convert to unicode, subtract 96
      // if j or above, subtract 1 extra
      let charNum = char.charCodeAt() - 96;
      if (charNum >= 10) charNum--;

      // find row + column
      let row = Math.floor((charNum + 4) / 5);
      let column = charNum % 5;
      if (column === 0) column = 5;

      // concatenate onto last result
      return acc + column.toString() + row.toString();
    }, "");
  } else {
    //// DECODER
    // this time, split by word, check if even
    const inputArray = input.split(" ");
    for (let word of inputArray) {
      if (word.length % 2 !== 0) return false;
      //convert to array, break word array into pieces of 2 chars each
      const inputArray = word.split("");
      let wordArray = word.match(/.{1,2}/g);

      // decode each char in the word
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
  }
  return result.trim();
}

module.exports = polybius;
