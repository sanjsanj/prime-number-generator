let primesArray;

function primeGenerator(num) {
  let currentNum = 2;
  primesArray = [];

  while (primesArray.length < num) {
    if (_isPrime(currentNum)) {
      primesArray.push(currentNum);
    }

    currentNum++;
  }

  return primesArray;
}

function _isPrime(num) {
  let isPrime = true;

  for (let prime of primesArray) {
    if (prime > Math.sqrt(num)) break;

    if (num % prime === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

module.exports = { primeGenerator };
