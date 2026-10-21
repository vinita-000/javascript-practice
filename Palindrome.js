function verifyPalindrome(str){
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    let left = 0;
    let right = clean.length -1;
    while(left<right){
        if(clean[left]!==clean[right]) return 'Not Palindrome';
        left++;
        right--
    }
    return 'Palindrome'
}

console.log(verifyPalindrome('1asa1'));