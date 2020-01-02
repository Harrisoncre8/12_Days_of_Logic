function upwardTrend(arr) {
	for(let i=0; i<arr.length; i++){
		if(typeof arr[i] !== 'number'){
			return 'Strings not permitted!'
		}
		if(arr[i+1] < arr[i]){
			return false;
		}
	}
	return true;
}

console.log('*** Testing upwardTrend:')
console.log(`upwardTrend([1, 2, 3, 4, 5, 6]) expected: true, actual:`, upwardTrend([1, 2, 3, 4, 5, 6]));
console.log(`upwardTrend([1, 3, 2, 5, 6, 7]) expected: false, actual:`, upwardTrend([1, 3, 2, 5, 6, 7]));
console.log(`upwardTrend([1, 2, 3, 4, 5, "6", 7, 8, 9]) expected: 'Strings not permitted!', 
actual:`, upwardTrend([1, 2, 3, 4, 5, "6", 7, 8, 9]));
console.log(`upwardTrend([10, 12, 13, 15, 20]) expected: true, actual:`, upwardTrend([10, 12, 13, 15, 20]));
console.log(`upwardTrend([6, 9, 11, 15, 12]) expected: false, actual:`, upwardTrend([6, 9, 11, 15, 12]));