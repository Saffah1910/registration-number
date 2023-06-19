function RegistrationNumbers(regNo) {
    var allTheRegNums = [];



    function validData(regNo) {
        if (regNo !== "") {
          
            allTheRegNums.push(regNo)
            return allTheRegNums;
        }
       
    };
    function addRed(){
        if(regNo === ""){
            return "red"
        }
    }




    // function regNumExists(regNo) {

    //     if (allTheRegNums[regNo] === undefined) {
    //         allTheRegNums[regNo] = 1
    //     }
    // }

    // function keepRegNUm() {
    //     if (validData()) {
    //         var newList = Object.keys(allTheRegNums)
    //         return newList;
    //     }
    // };

    // function getRegNum() {
    //     return allTheRegNums
    // };




    return {

        validData,
        addRed
        // keepRegNUm,
        // getRegNum

    }


}


// function RegistrationNumbers() {
//     // var allTheRegNums = {};

// // var regNo = "";

//     // function validData(regNo) {

//     //     let regEx = /[\^C][A,J,L,F]\s?\d{1,3}\s?\d{1,3}$/
//     //     return regEx.test(regNo)
//     // };
//     // function addRegNo(regNo){
//     //     if(validData() === true && regNo !== ""){
//     //         return regNo
//     //     }

//     // };






// return{
//     validData,
//     addRegNo
// }




// }



    // function invalidMessage(regNo) {
    //     if (regEx.test(regNo) == false) {

    //     }
    //     return "invalid data"
    // };


    // function regNumExists(regNo) {

    //     if (allTheRegNums[regNo] === undefined) {
    //         allTheRegNums[regNo] = 1
    //     }
    // }

    // function keepRegNUm() {
    //     if (validData()) {
    //         var newList = Object.keys(allTheRegNums)
    //         return newList;
    //     }
    // };

    // function getRegNum() {
    //     return allTheRegNums
    // };
