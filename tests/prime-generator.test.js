const { primeGenerator } = require("../src/prime-generator");

describe("primeGenerator", () => {
  it("should return array of 1 prime number", () => {
    expect(primeGenerator(1)).toEqual([2]);
  });
  
  it("should return array of 2 prime numbers", () => {
    expect(primeGenerator(2)).toEqual([2, 3]);
  });
  
  it("should return array of 10 prime numbers", () => {
    const tenPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(primeGenerator(10)).toEqual(tenPrimes);
  });
});
