//cast
function sum(a) {
    let currentCount = a

    function f(b) {
        currentCount += b;
        return f;
    }

    f.toString = function() {
        return currentCount;
    }

    f.valueOf = () => {
        return currentCount;
    }

    return f;
}

console.log(+sum(1)(2));

// Work with Date
let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

if(day < 10) {
    day = "0" + day;
}

if(month < 10) {
    month = "0" + month;
}

let today = day + " : " + month + " : " + year;

console.log(today);

// For browser (can't run in terminal)
// function print_out() {
//     window.print();
// }


// Regular expression
let ye = new Date(2017, 0 ,1)
console.log(ye);
console.log(ye.getDay());

const str = "Karen";
const reg = /[A-Z]/;
console.log(reg.test(str));

const flan = "asfjh21fsaafg5k152kjg5 l;l515asd2kk52hj";
const regu = /a/
const r = flan.match(regu)
// alert(r)


// Find all the items, that not to include one of these arrays
function diffArray(arr1, arr2) {
 
    arr1Filtered = arr1.filter(function (value){
        return arr2.indexOf(value) === -1;
    });
    
    arr2Filtered = arr2.filter(function (value){
        return arr1.indexOf(value) === -1;
    });
    
    return arr1Filtered.concat(arr2Filtered);
   }
console.log(diffArray([1, 2, 3, 5, 54], [1, 2, 3, 4, 5])); 


console.log(5 - "2");
console.log(5 + "2");
console.log(true + true);



// Accumulate all the numbers of array
var arra = [1, 2, [2, 5, 3, [32, 5], 3], 7, 4];
var sum = 0;

function foo(array) {

  array.forEach(function(value) {
    Array.isArray(value) ? foo(value) : sum += value; 
  });

  return sum;
}

console.log(foo(arra));