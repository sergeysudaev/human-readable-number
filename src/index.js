const firstDigit = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];
const teensDigits = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];
const secondDigit = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];
module.exports = function toReadable(number) {
    if (number < 1) {
        return firstDigit[0];
    }
    let result = [];
    const digitsArray = String(number)
        .split("")
        .reverse();
    +digitsArray[2] && result.push(firstDigit[digitsArray[2]] + " hundred");
    +digitsArray[1] === 1 && result.push(teensDigits[digitsArray[0]]);
    +digitsArray[1] > 1 && result.push(secondDigit[digitsArray[1] - 2]);
    +digitsArray[1] !== 1 &&
        +digitsArray[0] !== 0 &&
        result.push(firstDigit[digitsArray[0]]);
    return result.join(" ");
};
