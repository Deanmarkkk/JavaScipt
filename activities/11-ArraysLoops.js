//11a
const nums = [10,20,30];
nums[2] = 99;
console.log(nums)
//11b
function getLastValue(array) {
    const lastIndex = array.length -1; //-1 Means start in the last index
    return array[lastIndex]; //return the value of the last array
}
console.log(getLastValue([1,20,22,24]))
console.log(getLastValue(['dean', 'miks', 'allea', 'maine']));
//11c
function swapArray(list) {
    const lastValue = list.length -1;
    const getLast = list[lastValue];
    
    const firstValue = list[0];

    list[0] = getLast;//swap the values
    list[lastValue] = firstValue;//swap the values

    return list;
}
console.log(swapArray(['pistol', 'life', 'money', 'style']));
//11d
for (let i = 0; i <= 10; i += 2) { //COUNT 1-10 BUT COUNTS TO 2
    console.log(i);
};
//11e
for (let i = 5; i >= 1; i--) { //COUNT 1-5 BUT BACKWARDS
    console.log(i)
}
//11f
let x = 0; //USING WHILE LOOPS
while (x <= 10) {
    console.log(x);
    x += 2;
};
//11g
let c = 5;
while (c >= 1) { //USING WHILE LOOPS
    console.log(c);
    c--;
}
//11h
function addOne(array1) {
    let total = 0;
    for (let i = 0; i < array1.length; i++) {
        const getArray1 = array1[i];
        total += getArray1;
    }
    //Double the value of array 1
    const array1Doubled = []; //it will store the doubled value here
    for (let i = 0; i < array1.length; i++) {
        const getDoubledArray1 = array1[i];
        array1Doubled.push(getDoubledArray1 * 2);
    }
return array1Doubled;
}
console.log(`11h: ${addOne([1,2,3])}`);
//11i
function addNum(array3, num) {
    const result = []; //need to create an array to store result and avoid errors
    for (let i = 0; i < array3.length; i++) {
        const getArray3 = array3[i];
        result.push(getArray3 + num);
    }
return result;
};
console.log(`11i: ${addNum([1,2,3], 2)}`);
console.log(`11i: ${addNum([1,2,3], 4)}`);
//11j 
function addArrays(array4, array5) { //SAME LOOP FOR TWO LOOPS INSIDE THE FUNCTION
    let tempArray = []; //store the total here
    for (let i = 0; i < array4.length; i++) {
        const getArrays = array4[i] + array5[i]; //same loop for array4 and array5
        tempArray.push(getArrays);
    }
return tempArray;
}
console.log(`11j: ${addArrays([1,1,2], [1,1,3])}`);
//11k
function countPositive(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            result++ //HOW MANY GREATER THAN 0 IS IN THE NUMBERS ARRAY
        }
    }
return result;
};
console.log(`11k: ${countPositive([1, -3, 5])}`);
//11L, 11M
function minMax(numbers1) {
const result = {
    min: null,
    max: null
};
    for (let i = 0; i < numbers1.length; i++) {
        const getNum = numbers1[i];
        //Use two if to make sure the condition is correct
      if (result.min === null || getNum < result.min) {
        result.min = getNum;
      };
      if (result.max === null || getNum > result.max) {
        result.max = getNum;
      };
    };
return result;
}
console.log(minMax([1, -3, 5]));
console.log(minMax([-2,3,-5,7,10]));
console.log(minMax([])); //all done!
//11n 
function countWords(words) {
    // result[getWord] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    const result = {};
    for (let i = 0; i < words.length; i++) {
        const getWord = words[i];
        //mejo di ko gets to
        if (!result[getWord]) {
            result[getWord] = 1;
        }
        else {
            result[getWord]++;
        };
    };
return result;
};
console.log(countWords(['dean', 'dean', 'mikhail', 'john']));
//11o
const arrayO = ['hello', 'world', 'search', 'good'];
let index = -1;
for (let i = 0; i < arrayO.length; i++) {
    if (arrayO[i] === 'search') {
        index = 1; 
    }
};
console.log(`found: ${index}`);
const arrayO2 = ['not', 'found'];
index = -1;
for (let i = 0; i < arrayO2.length; i++) {
    if (arrayO2[i] === 'search') {
        index;
    }
};
console.log(`not found: ${index}`)
//11p
const arrayP = ['hello', 'world', 'search', 'good', 'search'];
let indexP = -1;
for (let i = 0; i < arrayP.length; i++) {
    if (arrayP[i] === 'search') {
        indexP = 1;
        break;
    };
};
console.log(`found: ${indexP}`)
const arrayP2 = ['not', 'found'];
indexP = -1;
for (let i = 0; i < arrayP2.length; i++) {
    if (arrayP2[i] === 'search') {
        indexP;
    };
};
console.log(`not found: ${indexP}`)
//11q
function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        }
    }
    return -1;
};
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
//11r 
function removeEgg(foods) {
    let result = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            continue;
        } else {
            result.push(foods[i]);
        }
    }
return result;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
//11s 
function removeEgg1(foods1) {
    let result = [];
    let count = 0;
    for (let i = 0; i < foods1.length; i++) {
        if (foods1[i] === 'egg' && count < 2) {
            count++
            continue;  
        } else {
            result.push(foods1[i]);
        }
    }
return result;
}
console.log(removeEgg1(['egg', 'apple', 'egg', 'egg', 'ham']));
//11t
function removeEgg2(foods2) {
    const reverseFunc = foods2.reverse();
    let result = [];
    let count = 0;

    for (let i = 0; i < reverseFunc.length; i++) {
        const getReversefunc = reverseFunc[i];
        if (getReversefunc === 'egg' && count < 2) {
            count++;
            continue;
        } else {
            result.push(getReversefunc)
        }
    }
    return result.reverse()
}
console.log(removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']));
//11u
function removeEgg3(foods3) {
    const foodsCopy = foods3.slice();
    const foodsCopyReverse = foodsCopy.reverse();
    const result = [];
    let count = 0; 
    for (let i = 0; i < foodsCopyReverse.length; i++) {
        const getValue = foodsCopyReverse[i];
        if (getValue === 'egg' && count < 2) {
            count++;
            continue;
        } else {
            result.push(getValue);
        }
    }
return result.reverse();
}
const foods3 = ['egg', 'apple', 'egg', 'egg', 'ham']
console.log(removeEgg3(foods3));
console.log(foods3);
//11v
for (let i = 1; i <= 20; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
   }
   else if (i % 3 === 0) {
    console.log('Fizz')
   }
   else if (i % 5 === 0) {
    console.log('Buzz')
   }
   else {
    console.log(i)
   }
}