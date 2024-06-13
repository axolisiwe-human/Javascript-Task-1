//Temperature check

const input = require("prompt-sync")
const prompt = input()

let temperature = prompt('Enter a temperature: ');

if(temperature < 0){
    console.log("It's freezing")
}
else if(temperature >= 0 && temperature <= 15){
    console.log("It's cold")
}
else if(temperature >= 16 && temperature <= 25){
    console.log("It's mild")
}
else if(temperature > 25){
    console.log("It's warm")
}

//switch
switch(true){
    case temperature < 0:
        console.log("It's freezing")
        break;
    case temperature >= 0 && temperature <= 15:
        console.log("It's cold")
        break;
    case temperature >= 16 && temperature <= 25:
        console.log("Its mild")
        break;
    case temperature > 25:
        console.log("It's warm")
        break;
    default:
        console.log("Invalid value")   
}

//Let's check if a number is dividible by 2, 3 or BOTH
let number = prompt("Enter any number: ")

if((number % 2) == 0 && (number % 3) == 0){
    console.log("Divisible by both")
}
else if((number % 2) == 0){
    console.log("Divisible by 2")
}
else if((number % 3) == 0){
    console.log("Divisible by 3")
}
else{
    console.log("Not divisible by either")
}

//Now lets cook with using Switch

switch(true){
    case (number % 2) == 0 && (number % 3) == 0:
        console.log("Divisible by both")
        break;
    case (number % 2) == 0:
        console.log("Divisible by 2")
        break;
    case (number % 3) == 0:
        console.log("Divisible by 3")
        break;
    case (number % 2) != 0 && (number % 3) != 0:
        console.log("Not Divisible by either")
        break;
    default:
        console.log("Invalid value")
}

//For Loops

console.log("Printing 1-10 numbers below")
for(let x = 1; x <= 10; x++){ //Print 1-10
    console.log(x)
}

console.log("Even numbers below")
for(x = 1; x <= 20; x++){ //Print even numbers
    if((x % 2) == 0){
        console.log(x)
    }
}

let sum = 0
for(x = 1; x <= 100; x++){ //sum of numbers from 1-100
    sum += x
}
console.log("The sum of all numbers from 1-100 is " + sum)

//array
const numbers = [1,2,3,4,5]
for(x = 0; x < 5; x++){
    console.log(numbers[x]) //all the numbers will be printed
}

const numberz = [3,7,2,5,10,6]
let max = number[0] //initialize to a first number

for(x = 0; x < numberz.length; x++){
    if(numberz[x] > max){
        max = numberz[x]
    }
}
console.log("The largest number is " + max)

//While loop
//4.1
let num = 1
while(num <= 10){
    console.log(num)
    num++
}

//4.2
num = 1
while(num <= 20){
    if((num % 2) == 0){
        console.log(num)
    }
    num++
}

//4.3
let i = 0
while(i <= 100){
    sum += i
    i++
}
console.log("Sum from 1-100: " + sum)

//4.4


//5.1 
let a = 1
console.log("Below are numbers from 1-10")
do{
    console.log(a) //print 1-10
    a++

}while(a <= 10)

//5.2
let b = 0
let do_sum = 0
do{
    do_sum += b
    b++

}while(b <= 100)
console.log("Sum from 1-100: " + do_sum)

//5.3
//let tries = 0
let inputNo
do{
    inputNo = prompt("Enter any number greater than 10: ")
   // tries++

    if(inputNo > 10){
        console.log("Thank you!")
    }


}while(inputNo <= 10)


//5.4 Guessing game
const minNumber = 1
const maxNumber = 10
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0
let running = true

do{
    guess = prompt("Guess a number between " + minNumber + ' - ' + maxNumber + ' : ')
    guess = Number(guess)

    if(isNaN(guess)){
        console.log("Please enter a valid number")
    }
    else if(guess < minNumber || guess > maxNumber){
        console.log("Please enter a valid number")
    }
    else{
        attempts++
        if(guess < answer){
            console.log("Too low! Try again")
        }
        else if(guess > answer){
            console.log("Too high! Try again")
        }
        else{
            console.log("Correct! The answer was " + answer + " .It took you " + attempts + " attempts.")
        }   
    }

}while(running)