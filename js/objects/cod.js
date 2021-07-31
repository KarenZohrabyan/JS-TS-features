const obj = {};
console.log(obj)
obj['name'] = "Karen";
console.log(obj)
let key = 'age';
obj[key] = 35;
console.log(obj)


function retObj (name, age) {
    return {
        name,
        age,
    }
}

const resOfFunction = retObj("Karen", 123);
console.log(resOfFunction);
resOfFunction.__proto__ = {name: 123};
console.log(resOfFunction.__proto__)


let user = {
    name: "Karen",
    sayHi() {
        console.log(this.name)
    }
}
let admin = user;
user = null
admin['sayHi']();


function User(name, age) {
    this.name = name;
    this.age = age;
}

const one = new User("AAAAAAAAAAAAA",123123123);
const two = new User("BBBBBBBBBBBBB",456456456)
console.log(one);
console.log(two)