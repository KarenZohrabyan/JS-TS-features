const obj = {
    name: "Karen",
    age: 25
};

const temp = {
    ...obj,
    name: "asdasd"
}

console.log(temp);
console.log(temp === obj);
console.log(temp == obj);

const myArr = [1, 2, 3];

const res = [...myArr, ...Object.keys(obj), ...obj];

console.log(res)