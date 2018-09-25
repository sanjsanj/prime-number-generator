const { PrimeFactory } = require("../src/prime-generator");
const { tenPrimes, thousandPrimes } = require("./helpers");

describe("PrimeFactory().generate", () => {
  it("should return array of 1 prime number", () => {
    expect(PrimeFactory().generate(1)).toEqual([2]);
  });

  it("should return array of 2 prime numbers", () => {
    expect(PrimeFactory().generate(2)).toEqual([2, 3]);
  });

  it("should return array of 10 prime numbers", () => {
    expect(PrimeFactory().generate(10)).toEqual(tenPrimes);
  });

  it("should return array of 1,000 prime numbers", () => {
    expect(PrimeFactory().generate(1000)).toEqual(thousandPrimes);
  });

  it("should return array of 20,000 prime numbers", () => {
    expect(PrimeFactory().generate(20000).length).toEqual(20000);
  });
});
