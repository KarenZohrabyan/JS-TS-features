let user = {
    name: "Karen",
    age: 25,
    describe() {
        console.group(`info: ${this.name}`)
        console.log(this.name);
        console.log(this.age)
        console.groupEnd()
    },
    hello(hay) {
        console.log(hay, this.name);
    },
    
}

let describe = user.describe.bind(user);
describe();

let hello = user.hello.bind(user);
hello('WOWOWOWOW');


let admin = {
    name: 'flan',
    hello() {
        console.log(this.name)
    },
    describe: user.hello.bind(user, "asdasd")
}

admin.hello();
admin.describe()

user.describe.bind(admin)()