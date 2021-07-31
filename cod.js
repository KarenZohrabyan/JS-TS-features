// console.log(deleteDuplicateOfArray(arr));


const ob1 = {a: 2, b: 3, c: 6}
const ob2 = {a: 5, d: 214}
const ob3 = {a: 10, f: 3456}
const temp = Object.assign(ob1,ob2, ob3)
console.log(temp)
// const aaaaa = {...ob1, ...ob2};
// console.log(aaaaa)


const obo = {
    name: "Karen",
    age: 25,
    get x () {}
}

const res = Object.assign({}, obo);
// const res = {...obo}
console.log(obo);
console.log(res)


const qwerty = {
    bar: 23,
    flan: Symbol,
    // baz: {
    //     x: qwerty,
    // },
    // x: qwerty
}

const asdasd = JSON.parse(JSON.stringify(qwerty));
console.log(asdasd)