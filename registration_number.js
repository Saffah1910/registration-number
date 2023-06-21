let textAreaElem = document.querySelector(".textArea");
let addRegNoBtnElem = document.querySelector(".addRegNoBtn");
let boxRegNoElem = document.querySelector("#boxRegNo");
let regNumsElem = document.querySelector(".regNums");



addRegNoBtnElem.addEventListener("click", function () {


    var registrationNums = RegistrationNumbers();

    let regEx = /[\^Cc][Aa,Jj,Ll,Ff]\s?\d{1,3}\s?\d{1,3}$/
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
        
        newDiv.classList.add(registrationNums.addNumberPlate(),registrationNums.addFont(),registrationNums.addCenter());

        // textAreaElem.value = ""
    }
  
    if (!result && textAreaElem.value !== "") {
   
        registrationNums.validData(textAreaElem.value);
        //creates a new div
        const newDiv = document.createElement("div");
        //gives it content
        const newContent = document.createTextNode("Only enter a registration number");
        //add content to new div
        newDiv.appendChild(newContent);
        //add element + content to DOM
        const currentDiv = document.getElementById("boxRegNo");
        document.body.insertBefore(newDiv, currentDiv);

        newDiv.style.display = "block";
        newDiv.classList.add(registrationNums.addRed());

        setTimeout(function(){
            newDiv.style.display= "none";
            textAreaElem.value = ""
        },2000);
     
    }
    if(textAreaElem.value === ""){
        const newDiv = document.createElement("div");
        //gives it content
        const newContent = document.createTextNode("Please enter a registration number");
        //add content to new div
        newDiv.appendChild(newContent);
        //add element + content to DOM
        const currentDiv = document.getElementById("boxRegNo");
        document.body.insertBefore(newDiv, currentDiv); 
        newDiv.style.display = "block";
        newDiv.classList.add(registrationNums.addRed());

        setTimeout(function(){
            newDiv.style.display= "none"
        },2000);
    }

});


