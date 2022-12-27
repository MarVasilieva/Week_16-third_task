const inputValue = document.querySelector('#outputValue');
const savedElementsContainer = document.querySelector('#savedElementsContainer');
const sortElementsContainer = document.querySelector('#sortElementsContainer');

const saveButton = document.querySelector('#saveButton');
const arrValues = [];
saveButton.addEventListener('click',() => {
    arrValues.push(inputValue.value);
    savedElementsContainer.innerText = arrValues;
    arrValues.sort((a, b) => a - b);
    sortElementsContainer.innerText = arrValues;
    const sumElementsContainer = document.querySelector('#sumElementsContainer');

let sumArr = arrValues.reduce(function(a,b){
    return (a + +b);
},0);
 sumElementsContainer.innerText = sumArr;
});



