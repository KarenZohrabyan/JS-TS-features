const obj = {
    name: "karen",
    id: 2323,
    description: {
        id: 25,
        age: 25,
        work: {
            where: "blablabla",
            id: 11,
            languages: {
                first: "c++",
                second: "c#",
                id: 99
            }
        }
    }
}

function getIds(obj) {
    for(let temp in obj) {
        if(typeof obj[temp] == "object" && obj[temp] != null) {
            getIds(obj[temp])
        } else if(temp === 'id') {
            console.log(obj[temp])
        }
    }
    return true;
}

getIds(obj);

function changeObjectsToString (obj) {
    for(let temp in obj) {
        if(typeof obj[temp] == "object" & obj[temp] != null) {
            changeObjectsToString(obj[temp]);
        }
    }
    obj['thisIsObject'] = true;
    return obj;
}

const res = changeObjectsToString(obj);

const arr1 = [1, 2, 3, 4, 5, 6]


const sumOfArray = (arr) => {
    let count = arr[0];
    arr.shift();
    if(arr.length == 0) {
        return count;
    } else {
        count += sumOfArray(arr)
    }
    return count
}

console.log(sumOfArray(arr1))