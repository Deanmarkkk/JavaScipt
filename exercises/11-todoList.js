//CODE OF TO DO LIST 1
const array1 = []; //declared an array to store the inputs
function todoList1() {
const todolist1Input = document.querySelector('.todolist1Input');
const gettodolist1Input = todolist1Input.value;

if (!gettodolist1Input) {
    alert('Input some text!') //if the value is empty, this will pop up.
} else {
    array1.push(gettodolist1Input)
    console.log(array1);
}
todolist1Input.value = ''; //reset the input box
}

//CODE OF TO DO LIST 2
const myArray = ['sleep', 'wake', 'eat'];
function myFunc() {
    let htmlFunc = '';
    const container2 = document.querySelector('.container2');
    for (let i = 0; i < myArray.length; i++) {
        const getValue = myArray[i];
        const getHtml = `<p>${getValue}</p>`;
        htmlFunc += getHtml;
    }
container2.innerHTML = htmlFunc;
};

function todoList2() {
   const todolist2Input = document.querySelector('.todolist2Input');
   const gettodolist2Input = todolist2Input.value;

    if (!gettodolist2Input) {
    alert('Please enter a todo!')
    } else {
    myArray.push(gettodolist2Input);
    myFunc();
    todolist2Input.value = '';
    }
}