# prime-number-generator

This code was developed on node v10.4.1

## Setting up
```
$ npm i
```

## Running tests
```
$ npm test
$ npm run test:coverage
```

## Creating prime multiplication tables via the CLI
```
$ node index.js 10
// replace 10 with however many rows and columns you want
```

## Sample output
```
┌─────────┬────┬────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ (index) │ 2  │ 3  │  5  │  7  │ 11  │ 13  │ 17  │ 19  │ 23  │ 29  │
├─────────┼────┼────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│    2    │ 4  │ 6  │ 10  │ 14  │ 22  │ 26  │ 34  │ 38  │ 46  │ 58  │
│    3    │ 6  │ 9  │ 15  │ 21  │ 33  │ 39  │ 51  │ 57  │ 69  │ 87  │
│    5    │ 10 │ 15 │ 25  │ 35  │ 55  │ 65  │ 85  │ 95  │ 115 │ 145 │
│    7    │ 14 │ 21 │ 35  │ 49  │ 77  │ 91  │ 119 │ 133 │ 161 │ 203 │
│   11    │ 22 │ 33 │ 55  │ 77  │ 121 │ 143 │ 187 │ 209 │ 253 │ 319 │
│   13    │ 26 │ 39 │ 65  │ 91  │ 143 │ 169 │ 221 │ 247 │ 299 │ 377 │
│   17    │ 34 │ 51 │ 85  │ 119 │ 187 │ 221 │ 289 │ 323 │ 391 │ 493 │
│   19    │ 38 │ 57 │ 95  │ 133 │ 209 │ 247 │ 323 │ 361 │ 437 │ 551 │
│   23    │ 46 │ 69 │ 115 │ 161 │ 253 │ 299 │ 391 │ 437 │ 529 │ 667 │
│   29    │ 58 │ 87 │ 145 │ 203 │ 319 │ 377 │ 493 │ 551 │ 667 │ 841 │
└─────────┴────┴────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
```

## Test report
```
 PASS  tests/prime-factory.test.js
  PrimeFactory
    generatePrimes
      √ should return array of 1 prime number (4ms)
      √ should return array of 2 prime numbers
      √ should return array of 10 prime numbers
      √ should return array of 1,000 prime numbers (17ms)
      √ should return array of 20,000 prime numbers (417ms)
    generateTable
      √ should return the right object to display 1 prime number (1ms)
      √ should return the right object to display 10 prime numbers (1ms)

-------------------|----------|----------|----------|----------|-------------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |      100 |      100 |      100 |      100 |                   |
 src               |      100 |      100 |      100 |      100 |                   |
  prime-factory.js |      100 |      100 |      100 |      100 |                   |
 tests             |      100 |      100 |      100 |      100 |                   |
  helpers.js       |      100 |      100 |      100 |      100 |                   |
-------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        2.169s
```
