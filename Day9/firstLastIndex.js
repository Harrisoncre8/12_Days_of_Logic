function charIndex(word, char) {
    if(!word.includes(char)){
        return undefined;
    } else {
        return [word.indexOf(char), word.lastIndexOf(char)]
    }
}

console.log('*** Testing charIndex:')
console.log(`charIndex('hello', 'l') expected: [2, 3], actual:`, charIndex('hello', 'l'));
console.log(`charIndex('circumlocution', 'r') expected: [2, 2], actual:`, charIndex('circumlocution', 'r'));
console.log(`charIndex('happy', 'e') expected: undefined, actual:`, charIndex('happy', 'e'));
console.log(`charIndex('happy', 'p') expected: [2, 3], actual:`, charIndex('happy', 'p'));
console.log(`charIndex('happy', 'h') expected: [0, 0], actual:`, charIndex('happy', 'h'));