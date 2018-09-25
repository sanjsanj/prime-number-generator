const { primeGenerator } = require("../src/prime-generator");

describe("primeGenerator", () => {
  it("should return array of 1 prime", () => {
    expect(primeGenerator(1)).toEqual([2]);
  });
});
