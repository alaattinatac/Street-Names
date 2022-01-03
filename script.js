const streetNames = [
    "Carnaby Street",
    "Abchurch Lane",
    "Adam's Court",
    "Piccadilly Street",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
    "Brick Lane"
]

function getLanes(arr) {
    let result = arr.filter(element => element.includes('Lane'));
    return result;
}
console.log(getLanes(streetNames))

/*
function filterStreet(arr) {

    let resultArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes("Lane")) {
            resultArr.push(arr[i]);
        }
    }

    return resultArr;
}

console.log(filterStreet(streetNames));
*/