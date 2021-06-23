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