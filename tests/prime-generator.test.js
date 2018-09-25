const { primeGenerator } = require("../src/prime-generator");
const { tenPrimes, thousandPrimes } = require("./helpers");

describe("primeGenerator", () => {
  it("should return array of 1 prime number", () => {
    expect(primeGenerator(1)).toEqual([2]);
  });

  it("should return array of 2 prime numbers", () => {
    expect(primeGenerator(2)).toEqual([2, 3]);
  });

  it("should return array of 10 prime numbers", () => {
    expect(primeGenerator(10)).toEqual(tenPrimes);
  });

  it("should return array of 1,000 prime numbers", () => {
    expect(primeGenerator(1000)).toEqual(thousandPrimes);
  });
});
