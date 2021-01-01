const substitution = require("../src/substitution");
const expect = require("chai").expect;

//Test sentence to use in most tests encoded/decoded
const input = "The quick brown fox jumps over the lazy dog";
const encoded = "may jworq ekgcf ugv pwdhl gxyk may sznb tgi";
const alphabet = "ZERTYUIAOPQSDFGHJKLMWXCVBN";

// Tests go here!
describe("substitution", () => {
  it("when not given an encode value, assumes encode is true", () => {
    const result = substitution(input, alphabet);
    const expected = substitution(input, alphabet, true);
    expect(result).to.eql(expected);
  });
  it("when encode is true, returns a message correctly encoded", () => {
    const result = substitution(input, alphabet);
    expect(result).to.eql(encoded);
  });
  //it("when encode is false, returns a message correctly decoded", () => {})
  //it("returns false if alphabet parameter is not a 26-char string", () => {})
  //it("returns false if chars in alphabet parameter are not unique")
  //it("returns the same result when input is lowercase or uppercase", () => {})
  //it("returns the same result when alphabet is lowercase or uppercase", () => {})
  //it("catches an error if input is not provided", () => {})
});
