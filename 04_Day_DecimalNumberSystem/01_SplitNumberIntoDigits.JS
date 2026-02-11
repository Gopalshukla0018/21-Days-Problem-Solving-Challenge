// Split Number into Digits

// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// Extract each digit mathematically using, and return them in an array. Do not use string operations.

function splitNumberIntoDigits(N) {
  if (N === 0) return [0];

  let digits = [];

  while (N > 0) {
    let digit = N % 10; // Step 1: Last digit nikalo
    digits.unshift(digit); // Step 2: Beginning me daalo
    N = Math.floor(N / 10); // Step 3: Last digit hatao
  }

  return digits;
}

let N = 12345;
let result = splitNumberIntoDigits(N);
console.log(result); // [1, 2, 3, 4, 5]
