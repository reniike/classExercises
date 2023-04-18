function findFirstUnique(numbers = []) {
    let result = 'No unique number found';
    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                count++
            }
        }
        if (count === 1) {
            result = numbers[i]
            break;
        }
    }
    return result;

}

console.log(findFirstUnique([4, 5, 1, 2, 0, 4]))