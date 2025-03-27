import {test, expect} from '@playwright/test';

function checkIsInputArray(input) {
    return Array.isArray(input)
}

console.log(checkIsInputArray('qa dojo'))
console.log(checkIsInputArray([1, 2,]))

function arrayCloning(array: Array<any>) {
    return [...structuredClone(array)]
}

console.log(arrayCloning([1, 2, 344, ["asdg", 12, 2]]))
console.log(arrayCloning([1, 2, 344, "asdg"]))

function getFirstElementOfArray(array: Array<any>, numberOfElementFromTheBeggining: number) {
    return array.slice(0, numberOfElementFromTheBeggining)
}

console.log(getFirstElementOfArray([7, 9, 0, -2, 3, 5, 6, 7, 2, 23, 53, "saf"], 4))
console.log(getFirstElementOfArray([[7, 9, 0, -2, 3, 5], 6, 7, 2, 23, 53, "saf"], 3))

function getLastElementOfArray(array: Array<any>, numberOfElementFromTheEnd: number) {
    return array.slice(-numberOfElementFromTheEnd)
}

console.log(getLastElementOfArray([7, 9, 0, -2, 3, 5, 6, 7, 2, 23, 53, "saf"], 4))

function arrayToString(array: Array<any>) {
    return array.join(",")
}

console.log(arrayToString([7, 9, 0, -2, 3, 5, "pok", 7, 2, "sad", 53, "saf"]))

function addDashBetweenEvenNumbers(number) {
    let str = String(number)
    let newStr = ``
    for (let i = 0; i < str.length; i++) {
        newStr += str[i]
        console.log(newStr)
        if (str[i] % 2 == 0 && str[i + 1] % 2 == 0){
            newStr += `-`
        }
    }
    return newStr
}
console.log(addDashBetweenEvenNumbers(2613842126672783))

function returnBiggerNumber(number1: number, number2: number) {
    if (Number.isInteger(number1) && Number.isInteger(number2) && number1 > number2) {
        return number1
    } else if (Number.isInteger(number1) && Number.isInteger(number2) && number1 < number2) {
        return number2
    } else {
        return 'both numbers should be Integer'
    }
}

console.log(returnBiggerNumber(3, 68))

function sumOf100() {
    let result = 0
    for (let i = 1; i < 101; i++) {
        result += i
    }
    return result
}

console.log(sumOf100())

function addElementToArray(number) {
    let array = []
    for (let i = 0; i < number; i++) {
        array.push(i)
    }
    return array
}

console.log(addElementToArray(32))

function addElementToArrayRevers(number) {
    let array = []
    for (let i = number; i > 0; i--) {
        array.push(i)
    }
    return array
}

console.log(addElementToArrayRevers(5))

function arraySorting(array: Array) {

    return array.sort((a, b) => a - b)
}

console.log(arraySorting([6, 3, -6, 0, 4, 120, 4.5]))


test('array-test', async ({page}) => {

});