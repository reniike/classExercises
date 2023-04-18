function rotateArray(numbers = []) {
    let index = numbers.length - 1
    let lastNumber = numbers[index]

    for (let i = 0; i < numbers.length ; i++) {
        numbers[index] = numbers[index - 1]
        index--;
    }
    numbers[0] = lastNumber
    return numbers
}

console.log(rotateArray([1, 2, 3, 4, 5]))
