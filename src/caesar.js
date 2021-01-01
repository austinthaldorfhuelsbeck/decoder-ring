/*
  ///// SOME MATH IS REQUIRED /////
  There are only 26 letters, so when shifting,
  unicode values will sometimes exceed letter range.
  To reset the value back to 1 after 26, you can use a modulo
  Unicode values however for lowercase letter start at 97.
  ∴ Therefore to shift and wrap:
  1) Add the shift
  2) Subtract 97 to get 'into range' for a remainder to be helpful
  3) Take the modulo 26
  4) Add 97 to get back into range for Unicode
*/

// This function turns the input into an array,
// iterates through with .map(),
// shifts each character and stores the result
// joins back to a string and returns!

function caesar(input, shift, encode = true) {
  // convert the input to lowercase and to an array by letter
  // throw an error if no input, or if there's in issue with the input
  try {
    if (!input) throw "ERROR: No input provided!";
    inputArray = input.toLowerCase().split("");

    // return false if there's a problem with shift
    if (!shift || shift < -25 || shift > 25) return false;
    // flip shift if decoding
    if (!encode) shift *= -1;

    const resultArray = inputArray.map((char) => {
      // convert to unicode
      // if punctuation, skip
      const charCode = char.charCodeAt();
      if (charCode < 97 || charCode > 122) return char;

      // calculate shiftDelta:
      // this # represents the distance from "a" (97) if positive,
      // or the distance from "{" (123) if negative
      const shiftDelta = (charCode + shift - 97) % 26;
      if (shiftDelta >= 0) return String.fromCharCode(shiftDelta + 97);
      return String.fromCharCode(shiftDelta + 123);
    });

    // returns a string
    return resultArray.join("");
  } catch (error) {
    return `ERROR: ${error}`;
  }
}

module.exports = caesar;
