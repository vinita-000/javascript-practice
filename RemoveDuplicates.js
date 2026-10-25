function removeDuplicates(arr) {
    let set = new Set();
    for (let a of arr) {
        set.add(a);
    }
    console.log([...set]);

}

removeDuplicates([3, 6, 1, 8, 1, 2]);