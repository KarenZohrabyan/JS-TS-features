class MyClass {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info () {
        console.log(this.name, " - name");
        console.log(this.age, " - age");
    }
}

const myClass = new MyClass('Karen', 25);
// myClass.info();

// console.log(myClass instanceof MyClass);

class Instanse extends MyClass {
    constructor() {
        super("asd", 23);
        this.height = 100;
    }

    info() {
        console.log(this.height)
    }
}

const instance = new Instanse(100);
instance.info()
console.log(instance.__proto__)