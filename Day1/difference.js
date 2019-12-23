// Given an array of integers, 
// return the difference between the largest 
// and smallest integers in the array.

function difference(array){
  let biggest = Math.max.apply(null, array);
  let smallest = Math.min.apply(null, array);
  return biggest - smallest;
}