const ob = {
    name: "Karen",
    age: 25
}

for (let elem in ob) {
    console.log(elem);
}

console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob))

const map = new Map();

map.set(24, "Karen");
console.log(map.get(24))
console.log(map.has(24))
console.log(map)