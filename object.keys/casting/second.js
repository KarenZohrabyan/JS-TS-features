// const str = "Karen  neraK"

// const word = str.split('').reverse().join('');
// if(str == word) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }


function isPolindrome(word) {
    const side_1 = word.toLowerCase();
    let side_2 = ""

    for(let i = side_1.length - 1; i >= 0; i--) {
        side_2 += side_1[i];
    }

    return (side_1 == side_2) ? true : false
}

console.log(isPolindrome('Karen  neraK'));

console.log(process.env.USER.FIRSTNAME);