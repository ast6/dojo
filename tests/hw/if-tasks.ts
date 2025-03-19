// odd or even
let number = 15

if (number % 2 == 0) {
    console.log("number is even")
} else {
    console.log("number is odd")
}

//const userInput = prompt("enter hour of the day(range 0 - 23)")
//const hour = parseInt(userInput || ``)
let hour = "2-5"
if (hour >= 0 && hour <= 23 && !isNaN(hour)) {
    if (hour < 12) {
        console.log("Good Morning!")
    } else if (hour >= 12 && hour <= 18) {
        console.log("Good Day!")
    } else {
        console.log("Good afternoon!")
    }
} else {
    console.log("enter valid hour of day")
}

//check mark test
let mark = 100

if (mark >= 0 && mark <= 100 && !isNaN(mark)) {
    if (mark < 50) {
        console.log("unpassed :(")
    } else if (mark >= 50 || mark <= 100) {
        console.log("Graz")
    }
} else {
    console.log("enter valid mark")
}

//election age
let age = 45
if (age >= 18 && !isNaN(age)) {
    console.log(`go to vote!`)
} else if ((age < 18) && age >= 0 && !isNaN(age)) {
    console.log(`grow, plz`)
} else {
    console.log(`enter valid age`)
}

//2 numbers
let num1 = '-13'
let num2 = 13

if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) {
        console.log("num 1 > num2")
    } else if
    (num1 < num2) {
        console.log(`num1 < num2`)
    } else if (num1 == num2) {
        console.log(`num1 = num2`)
    }
} else {
    console.log("enter valid numbers")
}

//traffic lights
const lights = ['red', "yellow", `green`]
const randomLight = lights[Math.floor(Math.random() * lights.length)]

if (randomLight == lights[0]) {
    console.log(lights[0])
} else if (randomLight == lights[1]) {
    console.log(lights[1])
} else if (randomLight == lights[2]) {
    console.log(lights[2])
}

//type of number
let num = '4.3' //кому закидує в невалід

if (num > 0) {
    console.log(`додатнє`)
} else if (num < 0) {
    console.log(`від'ємне`)
} else if (num == 0) {
    console.log(`0`)
} else {
    console.log(`enter valid num`)
}