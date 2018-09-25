const { PrimeFactory } = require("./src/prime-factory");

const num = process.argv[2];

const primesArray = PrimeFactory().generatePrimes(num);
const primesDataObject = PrimeFactory().generateTable(primesArray);

console.table(primesDataObject);
