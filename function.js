// greetMe()

// function greetMe(myName = 'there'){
//     myName = prompt('what is your name')
//     console.log('Hello, good morning', myName)
// }

// function addBoth(y){
//     // let x = Number(prompt('give me a number'))
//     // let y = Number(prompt('give me another number'))
//     let x = 2
//     let z = x + y 
//     console.log('The sum is', z)
// }

// addBoth()

function power(a, b){
    return Math.pow(a,b)
}

function sumOfArr(arr){
    return arr.reduce((z,b)=>z+b)
}

function capitalise(str){
    str = str.toLowerCase()
    str = str.replace(str[0], str[0].toUpperCase())
    return str
}

function addTen(x){
    return x + 10
}

function addTenToArr(arr){
    return arr.map(addTen)
}

function five(y){
    return y % 5 === 0
}

function multipleOfFive(arr){
    return arr.filter(five)
}