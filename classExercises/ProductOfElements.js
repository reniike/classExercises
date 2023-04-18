function findProducts(numbers) {
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        let product = 1;
        for (let j = 0; j < numbers.length; j++) {
            if (!(numbers[i] == numbers[j])) {
                product *= numbers[j]
            }
        }
        arr.push(product)
    }
    return arr
}
console.log(findProducts([1, 2, 3, 4]))
