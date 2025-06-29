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

//ARRAYS ARE REFERENCES
const ref = [1,2,3];
const ref2 = ref.slice(); //if i remove the slice, the ref will show too the string 'array'.
ref2.push('array');
console.log(ref);
console.log(ref2);
//SHORTCUT; DESTRUCTURING
const [firstVal, secondVal, thirdVal] = [5,10,15]; //shortcut to not assign var anymore
console.log(secondVal);
//BREAK FOR LOOPS
for (let i = 1; i <= 5; i++) {
    console.log(`${i}`);
    if (i === 3) {
        break; //the loop stops in 3 instead of 5
    }
};
//CONTINUE FOR LOOPS

for (let i = 1; i <= 5; i++) {
    console.log(`${i}`);
     if (i === 3) {
        continue; //the loop will continue 1-5, instead of 3
    }
    //break loop
    if (i === 3) {
        break; 
    };
};
//DIVISIBLE NUMBER, IF USE CONTINUE ALWAYS USE INCREMENT MANUALLY JUST LIKE THIS
let i = 1;
while (i <= 10) {
    if (i % 2 === 0) { //i, divisible by 2, remainder
        i++;
        continue;
    };
    console.log(i); //1,3,5,7,9
    i++;
};
//DOUBLE THE VALUE, SHORTCUT
/*
const doubled = [1,2,3];
const doubled2 = [];
for (let i = 0; i < doubled.length; i++) {
    const getValue = doubled[i];
    doubled2.push(getValue * 2);
};
console.log(doubled2);
*/
//DOUBLE THE VALUE, SHORTCUT, USING FUNCTION AND PARAMETER
function doubledFunction(doubledVal) {
    const doubled2 = [];
    for (let i = 0; i < doubledVal.length; i++) {
        const getValue = doubledVal[i];
        if (getValue === 0) {
            return doubled2; //another way to stop the loop, just like the break
        }
        doubled2.push(getValue * 2);     
    };
    return doubled2;
};
console.log(doubledFunction([5,6,7]));
console.log(doubledFunction([1,2,0,3]));
