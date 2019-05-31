function copyArrayAndManipulate(array, instructions){
    const output = [];
    for (let i = 0; i < array.length; i++){
        output.push(instructions(array[i]))
    }
    return output;
}

function double(number){
    return number + number
}

const result = copyArrayAndManipulate([1,2,3], double)

console.log(result)