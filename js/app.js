//Kaisa Palmér
//October 1st
//kaisa.palmer@gmail.com

/*
This is
a comment
---------------------



console.log("Hello World! Let's learn Javascript!");
console.log("This is line 1.");
console.log("This is line 2.");
console.log("This is line 3."); console.log("This is line 4.");
console.log("This is line 5.");
console.log("This is line 6.");

const exampleString = "Hello World!";
console.log(exampleString);

var input = 14;
console.log(input);

x = 5;
y = 2;
z = x * y;
console.log(z);

let carName;
carName = "Toyota";
console.log(carName);


let numberOfBottles = 10;
const line1 = " green bottles hanging on the wall";
const line2 = " and if one green bottle, should accidentally fall, there will be";

console.log(numberOfBottles);
console.log(line1);
console.log(numberOfBottles);
console.log(line1);
console.log(line2);
console.log(--numberOfBottles);
console.log(line1);

for (let i = numberOfBottles + 1; i >= 0; i--) {
  console.log(i + line1 + line2);
}


function myFirstFunction(i){
  console.log(i);
}
let int = 10;
myFirstFunction(int);



function circleArea(radius){
  let area = Math.PI * Math.pow(radius, 2);
  return area;
}
console.log(circleArea(2));



function uträkning(weight, hight){

  let BMI = weight / (hight * hight);

  return BMI;
}

let result = uträkning(70, 1.82);

console.log(result);



function hypotenuse(a, b){

  let triangle = Math.sqrt(a * a + b * b);
  return triangle;
}
let result_1 = hypotenuse(3,4)
console.log(result_1);


function convertSecondsToMinutes(seconds){
  const minutes =Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} minute(s) and ${remainingSeconds} second(s)`;
}
let result_2 = convertSecondsToMinutes(111);
console.log(result_2);

function negation(number){
  return -number;
}
let result_3 = negation(11);
console.log("Uppgift 3 resultat: " + result_3);





const string = "green bottles hanging on the wall";
let number = 10;

console.log(number + " " + string + ". " + number + " " + string);

--number;
const string2 = "And if one green bottle, should accidentally fall, there will be" + " " + number + " ";
console.log(string2 + string + ".");

const string3 = "And if one green bottle, should accidentally fall, there will be";

for (let i = number + 1; i >= 0; i--) {
  console.log(i + " " + string + " " + string3);
}

let bool = true;
console.log(bool);
console.log(!bool);

const age = 24;
const birthyear = 2002;
let condition = age == 26 || birthyear == 2002;
console.log(condition);

function getAge(){
  return age;
}
let ages = getAge();
console.log(ages);



const birthYear = 2000;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
let isChild = age <= 10;
let isTeenager = age >= 11 && age <= 17;
let isAdult = age >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);




const age = 90;


if (age >= 18 && age <= 85) {
  console.log("You can buy beer!");
}


const age = 58;

if (age != 18) {
  console.log("You can buy toys!")
}else if (age != 58 && age != 18) {
  console.log("You can buy toys!")
}else{
  console.log("This will always print!")
}
*/


let favoriteNumber = 21 % 2 === 0 ? "Your favorite number is an even number" : "Your favorite number is an odd number";
let greaterNumber = 24 >= 16 ? "The greater number is: 24" : "24 is not the greater number";
let currentYear = new Date().getFullYear();
let birthYear = 2000;
let age = currentYear - birthYear >= 18 ? "You are an adult" : "You are not an adult";


console.log(favoriteNumber);
console.log(age);
console.log(greaterNumber);

/*
if (age >= 18) {
  console.log("You are an adult")
}else if (age <= 17) {
  console.log("You are not an adult")
}


function makeLasagna(){
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.");
}

let isHungry = false;
//breakfast
if(isHungry){
  makeLasagna();
}

isHungry = true;
//lunch
if(isHungry){
  makeLasagna();
  makeLasagna();
}

let listExemple = [0, 1, 2, 3, 4]
listExemple.forEach(char => console.log(char));

*/


let listMove = ["F", "F", "F", "R", "R", "F", "F", "F", "R", "B"]

listMove.forEach((move) => {
  if (move == "R") {
    console.log("Turn Right")
  } else if (move == "F") {
    console.log("Move Forward")
  } else {
    console.log("Invalid move")
  }
})


function multi(number) {
  return number * number;
}

console.log(multi(4));


function average(numberOne, numberTwo) {
  return (numberOne + numberTwo) / 2;
}

console.log(average(2, 6))


function welcome(nameOne, nameTwo) {
  return "Welcome " + nameOne + " " + nameTwo + "!";
}

console.log(welcome("Ben", "Ting"));

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

console.log(randomNumber());

function numberToLetter(number) {
  if (number === 0) {
    console.log("A")
  } else if (number === 1) {
    console.log("B")
  } else if (number === 2) {
    console.log("C")
  }
}

numberToLetter(1);

function compareNumbers(number1, number2) {
  if (number1 === number2) {
    console.log("Both numbers are equal!")
  } else if (number1 > number2) {
    console.log("First number is greater!")
  } else if (number1 < number2) {
    console.log("Second number is greater!")
  }
}
compareNumbers(2, 1);

let kilogram = 70;
let hight = 1.82;

const BMI = kilogram / (hight*hight);

console.log("The BMI is: " + BMI);

// om siffran är delbar med 3 skriv fizz, om siffran är delbar med 5 skriv buzz. Är siffran delbar med både 3 och 5 skriv fizzbuzz
function fizzbuzz(number){
  if (number % 3 === 0 && number % 5 === 0){
    console.log("Fizzbuzz")
  }else if (number % 5 === 0){
    console.log("Buzz")
  }else if (number % 3 === 0){
    console.log("Fizz")
  }else{
    console.log(number);
  }
}
fizzbuzz(15);
