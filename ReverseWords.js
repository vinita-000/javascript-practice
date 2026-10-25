function reverseWords(str) {
    let rev = str.split(' ');
    let reverse = '';
    for (let i = rev.length - 1; i >= 0; i--) {
        reverse = reverse + rev[i] + ' ';
    }
    console.log(reverse);
}
reverseWords('Hello World');