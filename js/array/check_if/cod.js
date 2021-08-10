const arr = [1, 5, 6];

console.log(Array.isArray(arr));

function checkIfArray(input) {
    if(toString.call(input) === "[object Array]") {
        return true
    }
    return false
}

console.log(checkIfArray(arr));
console.log(checkIfArray("arr"));


// Return the first el of array

// const firstElement = (arr, num) => {
//     if(!num && arr.length > 0) {
//         return arr[0];
//     } else if((num || !num) && arr.length === 0) {
//         return [];
//     } else {
//         return arr.splice(0, num);
//     }
// }
// console.log(firstElement(arr, 2));
// console.log(firstElement([1, 2, 3, 5,4,123,4], 2));


const stringByArray = (arr) => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += + arr[i] + ",";
    }
    return str;
}

console.log(stringByArray(arr));
