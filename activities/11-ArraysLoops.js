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
for (let i = 5; i >= 1; i -= 1) { //COUNT 1-5 BUT BACKWARDS
    console.log(i)
}
//11f