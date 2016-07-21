'use strict';
const main = require('../../main/main.js');

describe('oddSquares',() => {
    let numbers;
beforeEach(() => {
    numbers = [1,2,3,4,5,6,7,8,9,10];
});
it('sum',() => {
    spyOn(console, 'log');

main.printOddSum(numbers);
const expectSum = 165;

expect(console.log).toHaveBeenCalledWith(expectSum);
});
it('odds',() => {

    const odds = main.buildOdds(numbers);
const expectOdds = [1,3,5,7,9];

expect(odds).toEqual(expectOdds);
});
it('squares',() => {

    const odds = main.buildOdds(numbers);
const squares = main.buildOddSquares(odds);
const expectSquares = [1,9,25,49,81];

expect(squares).toEqual(expectSquares);
});
it('sum',() => {

    const odds = main.buildOdds(numbers);
const squares = main.buildOddSquares(odds);
const sum = main.getSum(squares);
const expectSum = 165;

expect(sum).toEqual(expectSum);
});

});

