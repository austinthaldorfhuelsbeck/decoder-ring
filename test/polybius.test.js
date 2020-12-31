const poly = require("../src/polybius");
const expect = require("chai").expect;

//Test sentence to use in most tests encoded/decoded
const input = "The quick brown fox jumps over the lazy dog.";
const encoded =
  "443251 1454423152 2124432533 124335 4254235334 43155124 443251 13115545 414322";

// Tests go here!
describe("polybius square", () => {
  it("when not given an encode value, assumes encode is true", () => {
    const result = poly(input);
    const expected = poly(input, true);
    expect(result).to.eql(expected);
  });
  it("when encode is true, returns a message correctly encoded", () => {
    const result = poly(input);
    expect(result).to.eql(encoded);
  });
  it("when encode is false, returns a message correctly decoded", () => {
    const result = poly(encoded, false);
    const expected = "the qui/jck brown fox i/jumps over the lazy dog";
    expect(result).to.eql(expected);
  });
  it("returns a string whether or not encode is true", () => {
    const result = poly(input);
    const expected = poly(encoded, false);
    expect(result).to.be.a("string");
    expect(expected).to.be.a("string");
  });
  it("encodes the same value to i and j", () => {
    const result = poly(input);
    const expected = poly("The qujck brown fox iumps over the lazy dog.");
    expect(result).to.eql(expected);
  });
  it("returns false if decoding and if given an odd-number-length input", () => {
    const result = poly("4432423352 12541", false);
    expect(result).to.be.false;
  });
  it("returns the same result when input is lowercase or uppercase", () => {
    const result = poly(input);
    const expected = poly("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG!");
    expect(result).to.eql(expected);
  });
  it("catches an error if input is not provided", () => {
    const errorMessage = "ERROR: ";
    expect(poly().includes(errorMessage)).to.be.true;
  });
});
