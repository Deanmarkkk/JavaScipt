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
arrayForeach.forEach(function (value) { //save the 1-last value to the value
    if (value === 'dean') {
        return value;
    }
    console.log(value)
});

//-------------------------------------------------------------------------------
//ADVANCED FUNCTIONS PART 2

//ARROW FUNCTIONS
const arrowFunc = (param, param1) => {

    if (param === param1) {
        console.log('same input!')
    } else {
        console.log('Not same input!')
    }
};
arrowFunc('dean', 'dean');
//YOU CAN ALSO REMOVE THE BRACKETS IN PARAMETER, ITS WORKS THE SAME, BUT ONLY 1 PARAM
const oneParameter = one => { 
    console.log(one + 5);
};
oneParameter(5);
//ONE LINE ARROW FUNCTION - SHORTCUT
//can also remove curly brackets and the return command
const oneLine = () => 3 + 5;
setTimeout(function () {
    return console.log(`One line function: ${oneLine()}`)
}, 1000);
//FOR EACH METHOD, CHANGE TO ARROW METHOD
const arrayForeach1 = [
    'dean', 'mikhail', 'john', 'migs'
];
arrayForeach1.forEach((value) => { //save the 1-last value to the value
    if (value === 'john') {
        return value;
    }
    console.log(value)
});
//FUNCTION INSIDE AN OBJECT
const myObj = { 
    method: () => { //Method 1

    }, 
    method1() { //Method 2 - preferred
        //THIS IS CALLED SHORTHAND METHOD SYNTAX
        console.log('Method 2 - function inside an object')
    }
}
myObj.method1()

//----------------------------------------------------------------------------------------

//ADD EVENT LISTENER instead of onclick

//FOR BUTTON 1
const button1 = document.querySelector('.button1');
const text1 = document.querySelector('.text1');

const buttonFunc = () => {
    console.log('clicked!')
};
button1.addEventListener('click', buttonFunc); //add event listener
button1.removeEventListener('click', buttonFunc) //remove event listener