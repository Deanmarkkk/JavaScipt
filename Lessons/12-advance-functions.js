//FUNCTION CAN STORE IN A VARIABLE, CALLED "ANONYMOUS FUNCTION"
const funcGreet = function () {
    console.log('Hi there!');
};
//You can also call it directly using ()
funcGreet();

const obj1 = {name: 'dean',
     todo: function () { //called method, function inside an object
    console.log('wash dishes')
}};
console.log(obj1.name)
obj1.todo()
//PASSING A VALUE INTO A FUNCTION
function display(param) {
    console.log(param);
}
display(5);
//PASSING FUNCTION INTO ANOTHER FUNCTION
function practice1(param) {
    param() //because param contains function, we can use ()
};
practice1(function run() {console.log('hello there!')})
//setTimeout() FUNCTION
setTimeout(function greet(){console.log('hi there!')}, 2000);//1st parameter, how long to display in millisecond

//setInterval() FUNCTION, It keeps running every second
//const getInterval = setInterval(function greet1(){console.log('morning')}, 5000); //same as setTimeout() function
//ASYNCHRONOUS CODE
console.log('time out!') //the setTimeout() function will display next to this line
//FOR EACH METHOD
const arrayForeach = [
    'dean', 'mikhail', 'john', 'migs'
];
arrayForeach.forEach(function (value, i) { //save the 1-last value to the value, the index number
    if (value === 'dean') {
        return value;
    }
    console.log(value)
});
