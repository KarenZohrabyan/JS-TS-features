// console.log(deleteDuplicateOfArray(arr));


const ob1 = {a: 2, b: 3, c: 6}
const ob2 = {a: 5, d: 214}
const ob3 = {a: 10, f: 3456}
const temp = Object.assign(ob1, ob2, ob3)
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


const alab = {
    age: 25,
    foo() {
        return this.age;
    }
}

console.log(alab.foo());
const __foo = alab.foo;
console.log(__foo.apply())
console.log(__foo());



const obj = {
    name: "Karen",
    token: "asdasdasd",
    status: 123
}

function getName () {
    return "namename"
}

console.log(Object.assign(obj, {name: getName(), status: 999}));


function createUser (email, firstName, lastName, type) {
    const user = {};
    Object.assign(user, {email, firstName, lastName, type});
    return user;
}

function createUser_2 (params) {
    const user = {};
    Object.assign(user, params);
    return user;
}

const user_1 = createUser("asfasf@gmail.com", "Karen", "Zohrabyan", "buyer")
const email = "asdasd@mau"
const user_2 = createUser_2({
    email,
    firstName: "AraShmayis",
    lastName: "Tonoyan",
    type: "seller"
})

// console.log(user_1);
// console.log(user_2)