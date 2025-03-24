import {test, expect} from '@playwright/test';
// odd or even
function isOddOrEven(number) {
    if (typeof number === "number") {
        if (number % 2 == 0) {
            console.log("number is even")
            return true
        } else {
            console.log("number is odd")
            return false
        }
    }
}

test("is number even", () => {
    const result = isOddOrEven(2)
    expect(result).toBeTruthy()
});

test("is number odd", async () => {
    const result = isOddOrEven(1)
    expect(result).toBeFalsy()
})
test("0 test", async () => {
    const result = isOddOrEven(0)
    expect(result).toBeTruthy()
})

function clockHours(value) {
    if (value >= 0 && value <= 23 && !isNaN(value)) {
        if (value < 12) {
            return "Good Morning!"
        } else if (value >= 12 && value <= 18) {
            return "Good Day!"
        } else {
            return 'Good Afternoon!'
        }
    } else {
       throw Error('enter from 0 to 23')
    }
}

test("morning", async () => {
    const result = clockHours(0)
    expect(result).toBe('Good Morning!')
})
test("day", async () => {
    const result = clockHours(12)
    expect(result).toContain("Good Day!")
})
test("afternoon", async () => {
    const result = clockHours(22)
    expect(result).toContain("Good Afternoon!")
})
test("non valid", async () => {
    let exception = ``
    try {
        clockHours(`dsf`)
    } catch (error) {
        exception = error.message
    }
    expect(exception).toBe(`enter from 0 to 23`)
})

//check mark test
function checkIsTestPassed(value) {
    if (value >= 0 && value <= 100 && !isNaN(value)) {
        if (value < 50) {
            return false
        } else if (value >= 50 && value <= 100) {
            return true
        }
    } else {
        throw Error("enter valid mark")
    }
}

test("passed", async () => {
    const result = checkIsTestPassed(50)
    expect(result).toBeTruthy()

})
test("unpassed", async () => {
    const result = checkIsTestPassed(49)
    expect(result).toBeFalsy()
})
test(`unvalid`, async () => {
    let exception = ``
    try {
        checkIsTestPassed(`dsf`)
    } catch (error) {
        exception = error.message
    }
    expect(exception).toBe(`enter valid mark`)

})

//election age
function checkElectionAge(value) {
    if (value >= 18 && !isNaN(value)) {
        return `go to vote!`
    } else if ((value < 18) && value >= 0 && !isNaN(value)) {
        return `grow, plz`
    } else {
        throw Error(`enter valid age`)
    }
}

test('voting is allowed', async () => {
    const result = checkElectionAge(18)
    expect(result).toBe(`go to vote!`)
})
test('voting is not allowed', async () => {
    const result = checkElectionAge(17)
    expect(result).toBe(`grow, plz`)
})
test("invalid age", async () => {
    let exception = ``
    try {
        checkElectionAge(`dsf`)
    } catch (error) {
        exception = error.message
    }
    expect(exception).toBe(`enter valid age`)
})

//2 numbers
function whichNumberIsBigger(value1, value2) {

    if (!isNaN(value1) && !isNaN(value2)) {
        if (value1 > value2) {
            return "num 1 > num2"
        } else if
        (value1 < value2) {
            return `num1 < num2`
        } else if (value1 == value2) {
            return `num1 = num2`
        }
    } else {
        throw Error("enter 2 numbers")
    }
}

test('num1>num2', async () => {
    const result = whichNumberIsBigger(17, 0)
    expect(result).toBe(`num 1 > num2`)
})
test('num1<num2', async () => {
    const result = whichNumberIsBigger(2.3, 2.4)
    expect(result).toBe(`num 1 > num2`)
})
test('num1=num2', async () => {
    const result = whichNumberIsBigger(-4, -4)
    expect(result).toBe(`num 1 = num2`)
})
test("input should be number", async () => {
    let exception = ``
    try {
        whichNumberIsBigger(`dsf`, 2)
    } catch (error) {
        exception = error.message
    }
    expect(exception).toBe(`enter 2 numbers`)
})


//traffic lights
const lights = [`red`, `yellow`, `green`]
const randomLight = lights[Math.floor(Math.random() * lights.length)]

if (randomLight == lights[0]) {
    console.log(lights[0])
} else if (randomLight == lights[1]) {
    console.log(lights[1])
} else if (randomLight == lights[2]) {
    console.log(lights[2])
} else {
    throw Error('only 3 colors in traffic light')
}

//type of number
function negativeOrPositiveNum(value) {
    if (value > 0) {
        return `додатнє`
    } else if (value < 0) {
        return `від'ємне`
    } else if (value == 0) {
        return 0
    } else {
        return `enter valid num`
    }
}

test('number is positive', async ({}) => {
    const result = negativeOrPositiveNum(12)
    expect(result).toBe(`додатнє`)
})
test('number is negative', async ({}) => {
    const result = negativeOrPositiveNum(-3)
    expect(result).toBe(`від'ємне`)
})

test('number is zero', async () => {
    const result = negativeOrPositiveNum(0);
    expect(result).toBe("0");
});