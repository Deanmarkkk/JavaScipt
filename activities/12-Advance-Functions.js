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
        if (messages < 0) {
            clearInterval(renderFunc)
        }
}
}
//12i
