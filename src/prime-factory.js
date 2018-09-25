function PrimeFactory() {
  const primesArray = [];

  function generatePrimes(num) {
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

  function generateTable(primesArray) {
    return primesArray.reduce(
      (acc1, cur1) => ({
        ...acc1,
        [cur1]: primesArray.reduce(
          (acc2, cur2) => ({
            ...acc2,
            [cur2]: cur2 * cur1
          }),
          {}
        )
      }),
      {}
    );
  }

  return Object.freeze({ generatePrimes, generateTable });
}

module.exports = { PrimeFactory };
