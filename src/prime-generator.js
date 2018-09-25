function primeGenerator(num) {
  const primesArray = [];
  let currentNum = 2;

  while (primesArray.length < num) {
    if (_isPrime(currentNum)) {
      primesArray.push(currentNum);
    }

    currentNum++;
  }

  return primesArray;
}

function _isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

module.exports = { primeGenerator };
