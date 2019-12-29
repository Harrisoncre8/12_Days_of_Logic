function highLow(str) {
    let integer = str.split(" ").map(num => parseInt(num, 10))
    let highest = Math.max(...integer);
    let lowest = Math.min(...integer);
    return `${highest} ${lowest}`
}