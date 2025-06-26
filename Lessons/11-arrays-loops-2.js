const myArray = [{name: 'dean', date: '2025-10-03'}];
todoFunc()
function todoFunc() {
    const container = document.querySelector('.container');
    let html = '';
    for (let i = 0; i < myArray.length; i++) {
        const getArray = myArray[i];
        const getHtml = `<p>${getArray.name} ${getArray.date}
        <button 
            onclick="myArray.splice(${i}, 1);
            todoFunc()
            "> Delete
        </button>
        </p>`;
        html += getHtml;
    };
    container.innerHTML = html;
return html;
};
function inputFunc() {
    const text1 = document.querySelector('.text-1');
    const date1 = document.querySelector('.date-1');
    const getText1 = text1.value;
    const getDate1 = date1.value;

    myArray.push({name: getText1, date: getDate1})
    todoFunc();
    text1.value = '';
    date1.value = '';
};