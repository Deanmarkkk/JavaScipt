//12a
const add = function () {
    console.log(2+3)
}
add()
//12b
function runTwice(fun) {
        fun()
        fun()
}
runTwice(function() {console.log('12b')});
//12c
function C() {
    const btn12c = document.querySelector('.excercise3');

    setTimeout(function() {
    btn12c.innerHTML = '12-C DONE!'
    }, 1000);
}