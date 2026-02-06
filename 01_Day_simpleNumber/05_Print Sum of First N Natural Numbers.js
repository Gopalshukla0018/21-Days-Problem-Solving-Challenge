
// 5. Print Sum of First N Natural Numbers
// brute force approach
console.time();
let n = 100;
let count = 0;

for (let i = 1; i <= n; i++) {
  count += i;
}
console.log(count);

console.timeEnd();



// 5. optimized approach

console.time();
let n2 = 100;

let sum = (n2 * (n2 + 1)) / 2;
console.log(sum);
console.timeEnd();

