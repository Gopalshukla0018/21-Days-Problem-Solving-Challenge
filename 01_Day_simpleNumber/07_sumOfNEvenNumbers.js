// 7. Sum of N Even Numbers

let num = 7;
let s = 0;
console.time();
for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    s += i;
  }
}
console.log(s);
console.timeEnd();

//7.1 optimal approach

let n = 7;
let sum = 0;

console.time();
for (let i = 2; i <= n; i += 2) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);
console.timeEnd();
