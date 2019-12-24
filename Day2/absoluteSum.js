function getAbsSum(arr) {
    let sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum += Math.abs(arr[i]);
    }
    return sum;
}

// Solving problem using .reduce
function getAbsSum(arr) {
    return arr.reduce((total, amount) => total + Math.abs(amount), 0)
}

console.log('*** Testing getAbsSum:')
console.log(`getAbsSum([2, -1, -3, 4, 8]) expected: 18, actual:`, getAbsSum([2, -1, -3, 4, 8]));
console.log(`getAbsSum([-1]) expected: 1, actual:`, getAbsSum([-1]));
console.log(`getAbsSum([-1, -3, -5, -4, -10, 0]) expected: 23, actual:`, getAbsSum([-1, -3, -5, -4, -10, 0]));
console.log(`getAbsSum([500]) expected: 500, actual:`, getAbsSum([500]));
