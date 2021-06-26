// First: we convert the number to string
// second: We split that string
// Third: We reverse that received array and join its items into one
// Finally: We check weather the result number equals to an origin number or not 

const polyndrom = (num) => {
    return Number(String(num).split('').reverse().join('')) === num;
}

console.log(polyndrom(121))