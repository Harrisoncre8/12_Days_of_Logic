// Given an array of integers, 
// return the difference between the largest 
// and smallest integers in the array.

function difference(array){
  let biggest = Math.max.apply(null, array);
  let smallest = Math.min.apply(null, array);
  return biggest - smallest;
}

console.log('*** Testing difference:')
console.log(`difference([2, 3, 4]) expected: 2, actual:`, difference([2, 3, 4]));
console.log(`difference([100, 280, 330]) expected: 230, actual:`, difference([100, 280, 330]));
console.log(`difference([-10, 30, 2, -8]) expected: 2, actual:`, difference([-10, 30, 2, -8]));