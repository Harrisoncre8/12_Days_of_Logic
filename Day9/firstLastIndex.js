function charIndex(word, char) {
    if(!word.includes(char)){
        return undefined;
    } else {
        return [word.indexOf(char), word.lastIndexOf(char)]
    }
}