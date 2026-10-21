function reverseString(name){
    let output = '';
    for(let i=name.length-1; i>=0; i--){
        output += name[i]
    }

    return output
}

console.log(reverseString('Vinita'));