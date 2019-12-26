function countVowels(str) {
    let vowel = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            vowel += 1;
        }
    }
    return vowel;
}


console.log('*** Testing vowels:')
console.log(`countVowels('Celebration') expected: 5, actual:`, countVowels('Celebration'));
console.log(`countVowels('Palm') expected: 1, actual:`, countVowels('Palm'));
console.log(`countVowels('Prediction') expected: 4, actual:`, countVowels('Prediction'));
console.log(`countVowels('Portrait') expected: 3, actual:`, countVowels('Portrait'));
console.log(`countVowels('Convention') expected: 4, actual:`, countVowels('Convention'));

