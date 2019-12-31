function removeVowels(str) {
    let vowel = '';
    for(let i=0; i<str.length; i++){
        if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' 
            && str[i] !== 'o' && str[i] !== 'u'
            && str[i] !== 'A' && str[i] !== 'E' 
            && str[i] !== 'I' && str[i] !== 'O' 
            && str[i] !== 'U'){
            vowel += str[i];
        }
    }
    return vowel;
}

// solve using RegEx
function removeVowels(str){
    return str.replace(/[aeiou]/ig, '');
}

console.log('*** Testing removeVowels:')

console.log(`removeVowels("Everybody wants me to talk about Robert Pattinson and not Brian Williams
—I guess people just don’t care about Brian!") expected: "vrybdy wnts m t tlk bt Rbrt Pttnsn 
nd nt Brn Wllms— gss ppl jst dn’t cr bt Brn!", actual:`, 
removeVowels("Everybody wants me to talk about Robert Pattinson and not Brian Williams—I guess people just don’t care about Brian!"));

console.log(`removeVowels("Happy Thanksgiving to all--even the haters and losers!" 
expected: "Hppy Thnksgvng t ll--vn th htrs nd lsrs!", actual:`, 
removeVowels("Happy Thanksgiving to all--even the haters and losers!"));

console.log(`removeVowels("Watch Kasich squirm --- 
if he is not truthful in his negative ads I will sue him just for fun!" 
expected: "Wtch Ksch sqrm --- f h s nt trthfl n hs ngtv ds  wll s hm jst fr fn!", actual:`, 
removeVowels("Watch Kasich squirm --- if he is not truthful in his negative ads I will sue him just for fun!"));

console.log(`removeVowels("This election is a total sham and a travesty. We are not a democracy!" 
expected: "Ths lctn s  ttl shm nd  trvsty. W r nt  dmcrcy!", actual:`, 
removeVowels("This election is a total sham and a travesty. We are not a democracy!"));
