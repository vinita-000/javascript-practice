function anagrams(str1, str2) {
    let a = str1.split('').sort().join('');
    let b = str2.split('').sort().join('');
    if (a === b) {
        console.log('Strings are anagram');
    }
    else {
        console.log('Strings sre not anagram');
    }
}
anagrams('listen', 'silent');