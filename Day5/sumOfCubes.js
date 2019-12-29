function sumOfCubes(nums) {
    if(nums.length === 0){
        return nums.length;
   } else {
        let cube = nums.map(eachValue => eachValue ** 3);
        return cube.reduce((total, increment) => total + increment, 0)
   }
}


console.log('*** Testing sumOfCubes:')
console.log(`sumOfCubes([1, 5, 9]) expected: 855, actual:`, sumOfCubes([1, 5, 9]));
console.log(`sumOfCubes([]) expected: 0, actual:`, sumOfCubes([]));
console.log(`sumOfCubes([5, 9, 4, 4, 9]) expected: 1711, actual:`, sumOfCubes([5, 9, 4, 4, 9]));
console.log(`sumOfCubes([32]) expected: 32768, actual:`, sumOfCubes([32]));
console.log(`sumOfCubes([1, 1, 1]) expected: 3, actual:`, sumOfCubes([1, 1, 1]));
console.log(`sumOfCubes([0, 1, 2]) expected: 9, actual:`, sumOfCubes([0, 1, 2]));
