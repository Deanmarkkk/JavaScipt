//12a
const add = function () {
    console.log(2+3)
}
add()
//12b
function runTwice(fun) {
        fun()
        add()
}
runTwice(function() {console.log('12b')});
//12c
function C() {
    const btn12c = document.querySelector('.excercise3');

    setTimeout(function() {
    btn12c.innerHTML = '12-C DONE!'
    }, 1000);
}
//12d
function d() {
    const btn12d = document.querySelector('.excercise4');

    btn12d.innerHTML = 'Loading...';
    setInterval(function () {
        btn12d.innerHTML = 'Finished'
    }, 1000)
}
//12e 
function addCart() {
    const cartTxt = document.querySelector('.cartTxt');

    cartTxt.innerHTML = 'Added';
    setInterval(function() {
        cartTxt.innerHTML = '';         
    }, 2000)
};
//12f
function addCart1() {
    const cartTxt = document.querySelector('.cartTxt1');
    let intervalId;

    clearTimeout(intervalId); //fixed the timeout when pressing the button again
    cartTxt.innerHTML = 'Added';
    intervalId = setTimeout(function() {
        cartTxt.innerHTML = '';         
    }, 2000)        
};
//12g 
/*
setInterval(function () {
    if (document.title === '12 - Advanced Functions') {
        document.title = '(3) New Message';
    }
    else {
        document.title = '12 - Advanced Functions'
    }
}, 1000)
*/
//12h
/*
let messages = 2;
let renderFunc;
renderFunc = setInterval(function () {
    if (document.title === '12 - Advanced Functions') {
        document.title = `(${messages}) New Message`;
    }
    else {
        document.title = '12 - Advanced Functions'
    }
}, 1000)
function myFunc(operator) {
    if (operator === 'Add') {
        messages += 1;
    }
    else if (operator === 'Decrease') {
        messages -= 1;
}
}
*/
//12i
let messages = 2;
let renderFunc;
let isDisplayingNotif;



isDisplayingNotif = true;
renderFunc = setInterval(function () {
    if (document.title === '12 - Advanced Functions') {
        document.title = `(${messages}) New Message`;
    }
    else {
        document.title = '12 - Advanced Functions'
    }
}, 1000)

DisplayingNotif()
function DisplayingNotif() {
    if (isDisplayingNotif) {
        return;
    }
}

function myFunc(operator) {
    if (operator === 'Add') {
        messages++;   
    }
    else if (operator === 'Decrease') {
        messages--;
    }

    if (messages > 0) {
    DisplayingNotif()
}
    if (messages === 0) {
    stopNotif()
}
}

function stopNotif() {
    isDisplayingNotif = false;
    clearInterval(renderFunc);
    document.title = '12 - Advanced Functions';
}
//12 I - NOT FINISH
//12j
const multiply = (one, two) => {
    const result = one * two;
    return result;
};
console.log(multiply(2, 3));
console.log(multiply(7, 10));
//12k
const oneLine = () => 9 * 3;
console.log(oneLine());
//12L
const countPositiveNums = (myArray) => {
    let result = 0;
    myArray.forEach((value) => {
        if (value > 0) {
            result++;
        };
    });
    return result;
};
console.log(`Positive nums: ${countPositiveNums([1, -3, 5, 10, -1])}`);
//12m
const addNum = (array, num) => {
    return array.map((value) => value += num) //new .map()
}
console.log(addNum([1,2,3], 2))
//12n
function removeEggs(foods) {
    return foods.filter((food) => food !== 'egg');
}
console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));
function removeName(name) {
    return name.filter((value) => value !== 'dean'); //new .filter()
}
console.log(removeName(['dean', 'dean', 'mark', 'santos', 'mark']));
//12o
function removeEggs2(foods) {
    let count = 0;
    return foods.filter((value) => {
        if (value === 'egg' && count < 2) {
            count++;
            return false;
        }
        return true;    
    });
};
console.log(removeEggs2(['egg', 'apple', 'egg', 'egg', 'ham']));
//12p
const adding = () => {
    console.log(5+5);
};
adding()
//12q
const btnC = document.querySelector('.lesson12p');
btnC.addEventListener('click', () => {
   setTimeout(function() {
        btnC.innerHTML = 'done!'
   }, 1000);
});
//12r
//new file Rock Paper Scissors