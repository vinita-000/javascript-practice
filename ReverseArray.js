function reverseArray(arr){
    const out = [];
    for(let i=arr.length-1; i>=0;i--){
        out.push(arr[i])
    }
    return out
}

console.log(reverseArray([1,'a',2,'#','o',5]));