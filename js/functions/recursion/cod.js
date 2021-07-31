function pow(sum, exp) {
    if(exp === 0) {
        return 1;
    }
    if(exp === 1) {
        return sum;
    }
    return sum * pow(sum, exp - 1);
}

// for (let i = 0; i < 10; i++) {
//     console.log(pow(3, i))
// }

function factorial(num) {
    if(num === 1 || num === 2) {
        return num
    }

    return num * factorial(num - 1);
}

// for(let i = 1; i < 8; i++) {
//     console.log(factorial(i))
// }

function integers(start, end) {
    if(end - start === 2) {
        return [start + 1];
    }

    let arr = integers(start, end - 1);
    arr.push(end - 1)
    return arr;
}

// console.log(integers(3,9))

function sumOfIntegers(arr) {
    if(arr.length === 0) {
        return 0;
    }
    if(arr.length === 1) {
        return arr[0]
    }

    return arr.pop() + sumOfIntegers(arr);
}

// console.log(sumOfIntegers([3,4,5,3]))

// const arr = [1,2,3,4,5]
// console.log(arr.pop())


function fibonacci(num) {
    if(num === 0) {
        return 0;
    }
    if(num === 1) {
        return [0, 1];
    }

    let arr = fibonacci(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

// console.log(fibonacci(8))
// console.log(Math.floor(7/2))

function binarySearch(arr, num) {

    let half = parseInt(arr.length / 2);

    if(num > arr[half]) {
        return binarySearch(arr, num)
    } else if (num < arr[Math.floor(arr.length / 2)]){
        arr.length = Math.floor(arr.length / 2);
        return binarySearch(arr, num)
    }
}