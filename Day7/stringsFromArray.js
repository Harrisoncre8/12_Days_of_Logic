function filterArray(arr) {
    return arr.filter(value => typeof value === 'number')
}

console.log('*** Testing filterArray:')
console.log(`filterArray([1, 2, "a", "b"]) expected: [1, 2], actual:`, filterArray([1, 2, "a", "b"]));
console.log(`filterArray([1, "a", "b", 0, 15]) expected: [1, 0, 15], actual:`, filterArray([1, "a", "b", 0, 15]));
console.log(`filterArray(["$%^", 567, "&&&"]) expected: [567], actual:`, filterArray(["$%^", 567, "&&&"]));
console.log(`filterArray(["a", "e", "i", "o", "u"]) expected: [], actual:`, filterArray(["a", "e", "i", "o", "u"]));
console.log(`filterArray(["jsyt", 4, "yt", 6]) expected: [4, 6], actual:`, filterArray(["jsyt", 4, "yt", 6]));
console.log(`filterArray(["r", 5, "y", "e", 8, 9]) expected: [5, 8, 9], actual:`, filterArray(["r", 5, "y", "e", 8, 9]));