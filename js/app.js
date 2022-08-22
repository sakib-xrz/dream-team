//function for get inner text by id
function getTextValueById(ElementId) {
    const element = document.getElementById(ElementId);
    const name = element.innerText;
    return name;
}

// function for get input value by id
function getInputValueById(id) {
    const inputElement = document.getElementById(id);
    const inputAmountString = inputElement.value;
    const amount = parseInt(inputAmountString);
    return amount;
}

