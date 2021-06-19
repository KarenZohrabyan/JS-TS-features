interface Props {
    name: string;
    age: number;
}

const obj: Props = { name: "Karen", age: 25};


interface IP {
    [key: string]: any;
}

const A: IP = {};

A.country = 'asfasf';
A.age = 123;

console.log(A);

const message: string = "Armenia";

console.log(message.toUpperCase());


// const value = Math.random() < 0.5 ? "a" : "b";
// if(value !== "a") {
//     console.log(value);
// } else if (value === "b") {
    
// }

let zang: Array<number> = [1, 2, 3, 4, 5];
console.log(zang);

