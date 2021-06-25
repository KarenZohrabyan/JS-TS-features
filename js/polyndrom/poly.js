const polyndrom = (num) => {
    return Number(String(num).split('').reverse().join('')) === num;
}

console.log(polyndrom(121))