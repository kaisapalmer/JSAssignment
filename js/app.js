//Kaisa Palmér
//October 1st
//kaisa.palmer@gmail.com

/*
This is
a comment
---------------------

 */

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
