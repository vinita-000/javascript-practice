function dupsChar(str) {
    let set = new Set();
    for (let ch of str) {
        if (set.has(ch)) {
            console.log(ch);
        }
        else {
            set.add(ch);
        }
    }

}
dupsChar('Vinita')