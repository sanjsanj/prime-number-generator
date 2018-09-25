const { PrimeFactory } = require("../src/prime-factory");
const {
  tenPrimes,
  thousandPrimes,
  onePrimeDataObject,
  tenPrimesDataObject
} = require("./helpers");

describe("PrimeFactory", () => {
  describe("generatePrimes", () => {
    let generatePrimes;

    beforeEach(() => {
      generatePrimes = PrimeFactory().generatePrimes;
    });

    it("should return array of 1 prime number", () => {
      expect(generatePrimes(1)).toEqual([2]);
    });

    it("should return array of 2 prime numbers", () => {
      expect(generatePrimes(2)).toEqual([2, 3]);
    });

    it("should return array of 10 prime numbers", () => {
      expect(generatePrimes(10)).toEqual(tenPrimes);
    });

    it("should return array of 1,000 prime numbers", () => {
      expect(generatePrimes(1000)).toEqual(thousandPrimes);
    });

    it("should return array of 20,000 prime numbers", () => {
      expect(generatePrimes(20000).length).toEqual(20000);
    });
  });

  describe("generateTable", () => {
    let generateTable;

    beforeEach(() => {
      generateTable = PrimeFactory().generateTable;
    });

    it("should return the right object to display 1 prime number", () => {
      expect(generateTable([2])).toEqual(onePrimeDataObject);
    });

    it("should return the right object to display 10 prime numbers", () => {
      expect(generateTable(tenPrimes)).toEqual(tenPrimesDataObject);
    });
  });
});
