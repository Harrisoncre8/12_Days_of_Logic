function isValid(zip) {
	let str = Number(zip);
	if(Number.isInteger(str) && zip.length === 5){
		return true;
	} else {
		return false;
	}
}

console.log('*** Testing zip:')
console.log(`isValid("59001") expected: true, actual:`, isValid("59001"));
console.log(`isValid("732 32") expected: false, actual:`, isValid("732 32"));
console.log(`isValid("788876") expected: false, actual:`, isValid("788876"));
console.log(`isValid("a923b") expected: false, actual:`, isValid("a923b"));
console.log(`isValid("5923!") expected: false, actual:`, isValid("5923!"));
console.log(`isValid("88231") expected: true, actual:`, isValid("88231"));