// Write a program to find the maximum of three numbers.

// console.time("Execution Time");
// let a = 10;
// let b = 20;
// let c = 30;
// let max = a;
// if (a > b && a > c) {
//   max = a;
// } else if (b > a && b > c) {
//   max = b;
// } else {
//   max = c;
// }
// console.log("Maximum number is: ", max);
// console.timeEnd("Execution Time");

// console.time("Execution Time");
// let num = [10, 20, 30];
// let max = num[0];
// for (let i = 1; i < num.length; i++) {
//   if (num[i] > max) {
//     max = num[i];
//   }
// }
// console.log("Maximum number is: ", max);
// console.timeEnd("Execution Time");

console.time("Execution Time");
const nums = [10, 20, 30];
const max = Math.max(...nums);
console.log("Maximum number is:", max);
console.timeEnd("Execution Time");
