// check number is positive, negative or zero

// basic sol..
// console.time("Execution Time");
// let num = -5;
// if (num > 0) {
//   console.log(num, "is a positive number.");
// } else if (num < 0) {
//   console.log(num, "is a negative number.");
// } else {
//   console.log(num, "is zero.");
// }

// console.timeEnd("Execution Time");

function positiveNegativeOrZero(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(positiveNegativeOrZero(1));
console.log(positiveNegativeOrZero(-5));
console.log(positiveNegativeOrZero(0));