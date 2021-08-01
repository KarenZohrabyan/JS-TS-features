// const util = require('./util')

// import { add } from './util.js';

function carry(func) {
    return function (num1) {
        return function(num2) {
            return func(num1, num2)
        }
    }
}

function sum(a, b) {
    return a + b;
}

let myFunc = carry(sum);
console.log(myFunc(10)(20))


// function curry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function(...args2) {
//               return curried.apply(this, args.concat(args2));
//             }
//         }
//     }
// }


function curry(func) {
    return function(n1) {
        return function(n2) {
            return function(n3) {
                return func(n1, n2, n3)
            }
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

let myAdd = curry(add);
console.log(myAdd(1)(2)(3))
// console.log(util.admin)
console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')