function largetstOfThree(a, b, c) {
    let largest = a;
    if(b>largest) largest = b;
    if(c>largest) largest = c;
    return largest
}

console.log(largetstOfThree(60,20,90));