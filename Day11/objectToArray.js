function objectToArray(obj) {
	return Object.entries(obj)
}

console.log('*** Testing objectToArray:')
console.log(`objectToArray({D: 1, B: 2, C: 3}) expected: [["D", 1], ["B", 2], ["C", 3]], 
    actual:`, objectToArray({D: 1, B: 2, C: 3}));
console.log(`objectToArray({likes: 2, dislikes: 3, followers: 10 
    expected: [["likes", 2], ["dislikes", 3], ["followers", 10]], 
    actual:`, objectToArray({likes: 2, dislikes: 3, followers: 10}));