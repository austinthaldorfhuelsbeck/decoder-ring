const caesar = require("../src/caesar");
const expect = require("chai").expect;

//Test sentence to use in most tests
const input = "The quick brown fox jumps over the lazy dog.";

// Tests go here!
describe("caesar", () => {
  it("when not given an encode value, assumes encode is true", () => {
    const result = caesar(input, 7);
    const expected = caesar(input, 7, true);
    expect(result).to.eql(expected);
  });

  // for a correctly encoded message to appear, it is assumed
  // that the function ignores punctuation/whitespace and
  // wraps the alphabet, so those tests are redundant
  it("when encode is true, returns a message correctly encoded", () => {
    const result = caesar(input, 7);
    const expected = "aol xbpjr iyvdu mve qbtwz vcly aol shgf kvn.";
    expect(result).to.eql(expected);
  });

  it("when encode is false, returns a correctly decoded message", () => {
    const result = caesar(input, -4);
    const expected = "pda mqeyg xnksj bkt fqilo kran pda hwvu zkc.";
    expect(result).to.eql(expected);
  });

  it("when shift is negative, shifts to the left", () => {
    const result = caesar(input, 4, false);
    const expected = "pda mqeyg xnksj bkt fqilo kran pda hwvu zkc.";
    expect(result).to.eql(expected);
  });

  it("returns false if the shift value is missing, zero, < -25, or > 25", () => {
    expect(caesar(input)).to.be.false;
    expect(caesar(input, -26)).to.be.false;
    expect(caesar(input, 26)).to.be.false;
  });

  it("returns the same result when input is lowercase or uppercase", () => {
    const result = caesar("THe qUIcK broWN fOX JumPS OVer The LAZy doG.", 2);
    const expected = caesar(input, 2);
    expect(result).to.eql(expected);
  });

  it("catches an error if input is invalid", () => {
    const errorMessage = "ERROR: ";
    expect(caesar().includes(errorMessage)).to.be.true;
    expect(caesar(7).includes(errorMessage)).to.be.true;
    expect(caesar(["foobar"]).includes(errorMessage)).to.be.true;
  });
});
