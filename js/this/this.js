const object = {
    name: "Karen",
    age: 25,
    info: function () {
        return `${this.name}: ${this.age}`
    },
    infoArrowfunc: () => {
        return `${this.name}: ${this.age}`
    }
}


console.log(object.info()) // Karen: 25
console.log(object.infoArrowfunc()) // undefined: undefined


const obj_2 = {
    age: 25,
    info: function () {
        setTimeout(function () {
            console.log(this.age)
        }, 1000)
    }
}

// obj_2.info()

const name = 2
function foo() {
    const name = 2030203
    return (function () {
        return (() => {
            return this.name
        })()
    })()
}

console.log(foo());