'use strict';
function printOddSum(numbers) {
    const odds = buildOdds(numbers);
    const squares = buildOddSquares(odds);
    const sum = getSum(squares);

    console.log(sum);
}

function buildOdds(numbers) {
    const odds = [];
    for(const number of numbers){
        if(number % 2 != 0){
            odds.push(number);
        }
    }

    return odds;
}
function buildOddSquares(odds) {
    return odds.map(odd =>{
            return odd*odd;
})
}

function getSum(squares) {
    let sum = 0;
    for(const square of squares){
        sum += square;
    }

    return sum;
}

module.exports= {
    printOddSum:printOddSum,
    buildOdds:buildOdds,
    buildOddSquares:buildOddSquares,
    getSum:getSum
};