function createCulcFunction(num) {
    return function() {
        return 1000 * num;
    }
}

console.log(createCulcFunction(20)())


function sumOfNumbers(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

console.log(sumOfNumbers(10)(20))