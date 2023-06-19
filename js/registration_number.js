let textAreaElem = document.querySelector(".textArea");
let addRegNoBtnElem = document.querySelector(".addRegNoBtn");
let boxRegNoElem = document.querySelector("#boxRegNo");
let regNumsElem = document.querySelector(".regNums");



addRegNoBtnElem.addEventListener("click", function () {

    var registrationNums = RegistrationNumbers();

    let regEx = /[\^C][A,J,L,F]\s?\d{1,3}\s?\d{1,3}$/
    let result = textAreaElem.value.match(regEx);


    if (result && textAreaElem.value !== "") {
        registrationNums.validData(textAreaElem.value);
        //creates a new div
        const newDiv = document.createElement("div");
        //gives it content
        const newContent = document.createTextNode(textAreaElem.value.toUpperCase());
        //add content to new div
        newDiv.appendChild(newContent);
        //add element + content to DOM
        const currentDiv = document.getElementById("boxRegNo");
        document.body.insertBefore(newDiv, currentDiv);
    }
  
    if (!result && textAreaElem.value !== "") {
        registrationNums.validData(textAreaElem.value);
        //creates a new div
        const newDiv = document.createElement("div");
        //gives it content
        const newContent = document.createTextNode("Enter Valid data");
        //add content to new div
        newDiv.appendChild(newContent);
        //add element + content to DOM
        const currentDiv = document.getElementById("boxRegNo");
        document.body.insertBefore(newDiv, currentDiv);
    }
    if(textAreaElem.value === ""){
        const newDiv = document.createElement("div");
        //gives it content
        const newContent = document.createTextNode("no registatrion number entered");
        //add content to new div
        newDiv.appendChild(newContent);
        //add element + content to DOM
        const currentDiv = document.getElementById("boxRegNo");
        document.body.insertBefore(newDiv, currentDiv); 
    }

});



