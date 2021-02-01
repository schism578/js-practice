console.log(typeof 7);

let total = 1 + 2 + 3 + 4;
console.log(total);

total = total + 1;
console.log(total);

total += 3;
console.log(total);

total++;
console.log(total);

function computeArea(width, height) {
    return width * height;
}
console.log(computeArea(23, 34));

function celsToFahr(celsTemp) {
    return (celsTemp * 9 / 5) + 32;
}
console.log(celsToFahr(34));

function fahrToCels(fahrTemp) {
    return (fahrTemp - 32) * 5 / 9;
}
console.log(fahrToCels(78));

function isDivisible(dividend, divisor) {
    if(dividend % divisor === 0) {
        return true;
    } else {
        return false;
    }
  }
console.log(isDivisible(9, 3));
console.log(isDivisible(98, 13));