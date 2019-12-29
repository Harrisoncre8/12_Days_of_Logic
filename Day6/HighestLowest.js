function highLow(str) {
    let integer = str.split(" ").map(num => parseInt(num, 10))
    let highest = Math.max(...integer);
    let lowest = Math.min(...integer);
    return `${highest} ${lowest}`
}

console.log('*** Testing sumOfCubes:')
console.log(`highLow("1 -1") expected: "1 -1" actual:`, highLow("1 -1"));
console.log(`highLow("-1 -1") expected: "-1 -1" actual:`, highLow("-1 -1"));
console.log(`highLow("42") expected: "42 42" actual:`, highLow("42"));
console.log(`highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") expected: "542 -214" 
            actual:`, highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
console.log(`highLow("-1 -1 0") expected: "0 -1" actual:`, highLow("-1 -1 0"));
console.log(`highLow("1 -1 0") expected: "1 -1" actual:`, highLow("1 -1 0"));
