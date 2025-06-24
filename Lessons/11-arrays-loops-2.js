const myArray = [{name: 'dean', date: '01-09-2025'}];
function todoFunc() {
    const container = document.querySelector('.container');
    let html = '';
    for (let i = 0; i < myArray.length; i++) {
        const getArray = myArray[i];
        const getHtml = `<p>${getArray} ${getArray}</p>`;
        html += getHtml;
    };
    container.innerHTML = html;
return html;
};
function inputFunc() {
    const text1 = document.querySelector('.text1');
    const date1 = document.querySelector('.date1');
    const getText1 = text1.value;
    const getDate1 = date1.value;

    if (!getText1 || getText1 === null || !getDate1 || getDate1 === null) {
        alert('Do not enter empty fields')
    }
    else {
        myArray.push(getText1, getDate1)
        todoFunc();
        text1.value = '';
        getDate1.value = '';
    };
};