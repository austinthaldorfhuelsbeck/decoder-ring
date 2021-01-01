///// NO MATH IS REQUIRED FOR THIS ONE! :) /////

function substitution(input, alphabet, encode = true) {
  // convert the input to lowercase and to an array by letter
  inputArray = input.toLowerCase().split("");

  //
  const result = inputArray.reduce((acc, char) => {
    // ignore whitespace
    if (char === " ") return acc + " ";
    // convert to unicode, subtract 97
    // this is the position of the result character from alphabet
    const charCode = char.charCodeAt() - 97;
    return acc + alphabet[charCode].toLowerCase();
  }, "");

  // return!
  return result;
}

module.exports = substitution;
