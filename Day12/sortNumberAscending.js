function sortNumsAscending(arr) {
	if(Array.isArray(arr) !== true){
		return []
    };
    let newArr = arr.sort((a, b) => a - b);
    return newArr;
}

console.log('*** Testing sortNumsAscending:')
console.log(`sortNumsAscending([1, 2, 10, 50, 5]) expected: [1, 2, 5, 10, 50], 
             actual:`, sortNumsAscending([1, 2, 10, 50, 5]));
console.log(`sortNumsAscending(null) expected: [], actual:`, sortNumsAscending(null));
console.log(`sortNumsAscending([]) expected: [], actual:`, sortNumsAscending([]));
console.log(`sortNumsAscending([-23, -69, -54, -2, -32]) expected: [-69, -54, -32, -23, -2], 
             actual:`, sortNumsAscending([-23, -69, -54, -2, -32]));
console.log(`sortNumsAscending([-21, -9, -96]) expected: [-96, -21, -9], 
             actual:`, sortNumsAscending([-21, -9, -96]));
console.log(`sortNumsAscending([0]) expected: [0], actual:`, sortNumsAscending([0]));