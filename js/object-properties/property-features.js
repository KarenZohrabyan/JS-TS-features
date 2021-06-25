const object = {
    name: "Karen",
    age: 25
}

let age_descriptor = Object.getOwnPropertyDescriptor(object, "age");
let name_descriptor = Object.getOwnPropertyDescriptor(object, "name");
console.log(age_descriptor);
console.log(name_descriptor);

Object.defineProperty(object, 'name', {
    enumerable: false,
    writable: false,
    configurable: false
});

age_descriptor = Object.getOwnPropertyDescriptor(object, "age");
name_descriptor = Object.getOwnPropertyDescriptor(object, "name");
console.log(age_descriptor);
console.log(name_descriptor);