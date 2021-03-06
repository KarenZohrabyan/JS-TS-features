// Object.assign()
// JSON.parse(JSON.stringify())
// spread operator {...name}

// DEEP CLONING
// deep cloning (recursive version)
// with lodash
// message channel

// Object.assign()
const cloningWithAssign_1 = {
    name: "Karen",
    age: 25
}

const cloningWithAssign_2 = Object.assign({}, cloningWithAssign_1);

// JSON.parse(JSON.stringify())
const withJson_1 = {
    name: "Karen",
    age: 25,
}

const withJson_2 = JSON.parse(JSON.stringify(withJson_1));

// With Spread operator
const withSpread_1 = {
    name: "Karen",
    age: 25,
}

const withSpread_2 = {...withSpread_1};


// Deep clone with rekursive function
const deepObject = {
    name: "karen",
    info: {
        age: 25,
        home: {
            street: "asfasg",
        }
    },
    age: 231
}

function deepCloneRecursive(obj) {
    let clone = {};
    for (let i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null) {
            clone[i] = deepCloneRecursive(obj[i]);
        }
        else {
            clone[i] = obj[i];
        }
    }
    return clone;
}

const deepClonedObject = deepCloneRecursive(deepObject);


const ob = {
    name: Symbol,
    name: "Karen"
}

console.log({...ob});




const asd = {
    name: "Karen",
    age: 25
}

function newObject (obj) {
    return {
        ...obj,
        id: 111
    }
}

function newObjectAssign(obj) {
    return Object.assign({}, obj, {id:222});
}

let myNewObject = newObject(asd);
console.log(myNewObject);
console.log(myNewObject === asd)
myNewObject = newObjectAssign(asd);
console.log(myNewObject);
console.log(myNewObject === asd)