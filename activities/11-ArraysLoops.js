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