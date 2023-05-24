let textAreaElem = document.querySelector(".textArea");
let addRegNoBtnElem = document.querySelector(".addRegNoBtn");
let boxRegNoElem = document.querySelector("#boxRegNo");
let regNumsElem = document.querySelector(".regNums");


addRegNoBtnElem.addEventListener("click", function () {
    // var registrationNums = RegistrationNumbers();

    // if (textAreaElem.value = registrationNums.validData()) {
        //creates a new div
        const newDiv = document.createElement("p");
        //gives it content
        const newContent = document.createTextNode(textAreaElem.value);
        //add content to new div
        newDiv.appendChild(newContent);
        //add element + content to DOM
        const currentDiv = document.getElementById("boxRegNo");
        document.body.insertBefore(newDiv, currentDiv);
    // }
    // else {
    //     return registrationNums.invalidMessage()
    // // }



})