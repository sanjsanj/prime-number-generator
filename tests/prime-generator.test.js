const { PrimeFactory } = require("../src/prime-generator");
const { tenPrimes, thousandPrimes } = require("./helpers");

describe("PrimeFactory().generate", () => {
  let generate;

  beforeEach(() => {
    generate = PrimeFactory().generate;
  });

  it("should return array of 1 prime number", () => {
    expect(generate(1)).toEqual([2]);
  });

  it("should return array of 2 prime numbers", () => {
    expect(generate(2)).toEqual([2, 3]);
  });

  it("should return array of 10 prime numbers", () => {
    expect(generate(10)).toEqual(tenPrimes);
  });

  it("should return array of 1,000 prime numbers", () => {
    expect(generate(1000)).toEqual(thousandPrimes);
  });

  it("should return array of 20,000 prime numbers", () => {
    expect(generate(20000).length).toEqual(20000);
  });
});
