let digitList = [3, 5, 6, 9];

// approach 1

let output =
  digitList[0] * 1 +
  digitList[1] * 10 +
  digitList[2] * 100 +
  digitList[3] * 1000;

console.log(output);

// approach 2
let answer = 0;

for (let i = 0; i < digitList.length; i++) {
  answer += digitList[i] * Math.pow(10, i);
}

console.log(answer);
