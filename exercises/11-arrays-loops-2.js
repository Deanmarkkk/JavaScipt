const myArray = [{name: 'make coffee', date: '2025-10-03'}];
todoFunc();
function todoFunc() {
    const container = document.querySelector('.container');
    let html = '';
    /*
    for (let i = 0; i < myArray.length; i++) {
        const getArray = myArray[i]; //separate each using div element
        const getHtml = `
        <div>${getArray.name}</div> 
        <div>${getArray.date}</div>
        <button class="deleteBtn"
            onclick="myArray.splice(${i}, 1); 
            todoFunc()
            "> Delete
        </button>`;
        html += getHtml;
    };
    */
    myArray.forEach((getArray) => { //LESSON 12 - PART 2 CHANGE TO ForEach method 
        const getHtml = `
            <div>${getArray.name}</div> 
            <div>${getArray.date}</div>
            <button class="deleteBtn deleteButton">Delete
            </button>`;
            html += getHtml;
    })
    container.innerHTML = html; 
    //Added a event listener to delete button using loop (forEach)
    document.querySelectorAll('.deleteButton').forEach((value, index) => {
        value.addEventListener('click', () => {
            myArray.splice(value, index);
            todoFunc();
        });
    });


return html;
};

function inputFunc() {
    const text1 = document.querySelector('.text-1');
    const date1 = document.querySelector('.date-1');
    const getText1 = text1.value;
    const getDate1 = date1.value;

    if (!getText1 || !getDate1) {
        alert('Please enter the empty field.');
    } else {
        myArray.push({name: getText1, date: getDate1})
        todoFunc(); 
        text1.value = '';
         date1.value = '';
    };  
};
//ENTER key function
function enter(event) {
    if (event.key === 'Enter') {
        inputFunc();
    };
};
const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', () => {
    inputFunc()
});