const myArray = [{name: 'make coffee', date: '2025-10-03'}];
todoFunc();
function todoFunc() {
    const container = document.querySelector('.container');
    let html = '';
   //CHANGE TO FOR EACH METHOD, INSTEAD OF FOR LOOP
   myArray.forEach(function (value, index) {
    const getHtml = `
    <div>${value.name}</div>
    <div>${value.date}</div>
    <button class="deleteBtn" onclick="myArray.splice(${index}, 1) inputFunc()">Delete</button>
    `
    html += getHtml;
   });
    container.innerHTML = html; 
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