// Split Number into Digits

// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// Extract each digit mathematically using, and return them in an array. Do not use string operations.

function splitNumberIntoDigits(N) {
  let digits = [];
  while (N > 0) {
    let a = N % 10;
    digits.push(a);
    N = Math.floor(N / 10);
  }
  return digits;
}
let N = 12345;
let result = splitNumberIntoDigits(N);
console.log(result); // Output: [1, 2, 3, 4, 5]
