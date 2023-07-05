let textAreaElem = document.querySelector(".textArea");
let addRegNoBtnElem = document.querySelector(".addRegNoBtn");
let boxRegNoElem = document.querySelector("#boxRegNo");
let townElem = document.querySelector(".town");
let emptyInput = document.querySelector(".emptyInput");



var registrationNums = RegistrationNumbers();
addRegNoBtnElem.addEventListener("click", function () {

registrationNums.displayNewName(textAreaElem.value);
    registrationNums.displayNewName();

    let regEx = /[\^Cc][Aa,Jj,Ll,Kk]\s?\d{1,3}\s?\d{1,3}$/
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
     
    
        emptyInput.style.display = "block";
        emptyInput.classList.add(registrationNums.addRed());

        emptyInput.innerHTML = "Please enter registration number";
        setTimeout(function(){
            emptyInput.style.display= "none"
        },2000);
    }

});

if(townElem.value = "all towns"){
    registrationNums.filterTown();
    const newDiv = document.createElement("div");
    //gives it content
    const newContent = document.createTextNode(textAreaElem.value.toUpperCase());
    //add content to new div
    newDiv.appendChild(newContent);
    //add element + content to DOM
    const currentDiv = document.getElementById("boxRegNo");
    document.body.insertBefore(newDiv, currentDiv);
    
    newDiv.classList.add(registrationNums.addNumberPlate(),registrationNums.addFont(),registrationNums.addCenter());
}
if(townElem.value = "capetown"){
    registrationNums.filterTown();
    const newDiv = document.createElement("div");
    //gives it content
    const newContent = document.createTextNode(textAreaElem.value.toUpperCase());
    //add content to new div
    newDiv.appendChild(newContent);
    //add element + content to DOM
    const currentDiv = document.getElementById("boxRegNo");
    document.body.insertBefore(newDiv, currentDiv);
    
    newDiv.classList.add(registrationNums.addNumberPlate(),registrationNums.addFont(),registrationNums.addCenter());
}
if(townElem.value = "paarl"){
    registrationNums.filterTown()
}
if(townElem.value = "malmesbury"){
    registrationNums.filterTown()
}
if(townElem.value = "stellenbosch"){
    registrationNums.filterTown()
}
