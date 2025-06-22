/*
const myArray = [10, 20, 30] //this is an array
console.log(myArray)
console.log(myArray[1]) //get the index 1, which is 20
myArray[2] = 40; //change the value of index 2, which is 30.
console.log(myArray)
const secondArray = [1, 'Dean Mark', true, {language1: 'html'}]; //you can mix the value inside an array
console.log(secondArray);
console.log(typeof secondArray[3]) //type of index 2, which is an object
console.log(secondArray.length) //this will tell how many value in the array

myArray.push(50); //this func will add a value in the end of array value
console.log(myArray);

myArray.splice(1, 1) //1. index want to remove, 2. number of values to remove
console.log(myArray); //the value 40 removed from the array

//WHILE LOOP
let i = 1;
while (i <= 5) {
    console.log(i) //1-5
    i++ //without this increment step, the loop will run infinite
}

console.log('----')

//FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

//NON STANDARD LOOP
let randomNumber = 0;
while (randomNumber < 0.5) {
    randomNumber = Math.random();
}
console.log(randomNumber)
*/

//LOOPING THROUGH AN ARRAY
const todoArray = ['Dean', 'Mikhail', 'John'];

for (let i = 0; i < todoArray.length; i++) {
    const list = todoArray[i];
   console.log(list)
}
//ACCUMULATOR PATTERN & SOLVE THE VALUE OF AN ARRAY
const solve = [2,5,3]; 
let total = 0; //store the result
for (let i = 0; i < solve.length; i++) {
    let value = solve[i];
    total += value;
}
console.log(total)
//DOUBLE THE VALUE OF THE SOLVE ARRAY
const solveDoubled = [];

for (let i = 0; i < solve.length; i++) {
    const valueDoubled = solve[i];
    solveDoubled.push(valueDoubled * 2) //USE MULTIPLY TO DOUBLE THE VALUE
}
console.log(solveDoubled)
//PRACTICE DOUBLE THE VALUE
const myArray = [5,5,10];
let totalValue = 0;
for (let i = 0; i < myArray.length; i++) {
    const getValue = myArray[i];
    totalValue += getValue;
}
console.log(totalValue);

const myArrayDoubled = [];
for (let i = 0; i < myArray.length; i++) {
    const getValue2 = myArray[i];
    myArrayDoubled.push(getValue2 * 2);
}
console.log(myArrayDoubled);