function firstNonrepeatedChar(str) {
    let map = new Map();
    for (let ch of str) {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1)
        }
        else {
            map.set(ch, 1)
        }
    }

    for (let i of map.keys()) {
        if (map.get(i) === 1) {
            console.log(i);
            break;
        }
    }

}
firstNonrepeatedChar('aabbcd');