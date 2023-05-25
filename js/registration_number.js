let textAreaElem = document.querySelector(".textArea");
let addRegNoBtnElem = document.querySelector(".addRegNoBtn");
let boxRegNoElem = document.querySelector("#boxRegNo");
let regNumsElem = document.querySelector(".regNums");


addRegNoBtnElem.addEventListener("click", function () {

    var registrationNums = RegistrationNumbers();

    // var valid = registrationNums.validData();

    registrationNums.validData(textAreaElem.value);
    //creates a new div
    const newDiv = document.createElement("p");
    //gives it content
    const newContent = document.createTextNode(textAreaElem.value.toUpperCase());
    //add content to new div
    newDiv.appendChild(newContent);
    //add element + content to DOM
    const currentDiv = document.getElementById("boxRegNo");
    document.body.insertBefore(newDiv, currentDiv);


    // var invalid = registrationNums.invalidMessage()
    // if(invalid){
    //     boxRegNoElem.innerHTML = registrationNums.invalidMessage()
    // }






})