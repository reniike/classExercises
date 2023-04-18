function convertBinaryToNumber(binary) {
    let result = 0;
    let count = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        let square = 1;
        for (let j = 0; j < i; j++) {
            square *= 2;
        }
        result += square * binary.charAt(count);
        count++;
    }
    return result;
}

console.log(convertBinaryToNumber("1011"))