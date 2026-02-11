function removeDecimalPoint(N) {
    if (Number.isInteger(N)) return N;

    let multiplier = 1;

    while (!Number.isInteger(N * multiplier)) {
        multiplier *= 10;
    }

    return Math.round(N * multiplier);
}

let N = 12.34;
let result = removeDecimalPoint(N);
console.log(result); // 1234
