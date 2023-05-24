function RegistrationNumbers() {
    var allTheRegNums = {};


    // function displayRegNums(regNo) {
    //     if (regNo !== "") {
    //         return regNo
    //     }
    // else {
    //     return "Enter registration number"
    // }


    function validData(regNo) {
        if (regNo !== "") {
            let regEx = /[\^C][A,J,L,F]\s?\d{1,3}\s?\d{1,3}$/
            regEx.test(regNo);
        }
        else {
            return "Enter registration number"
        }
        return regNo


    };

    function invalidMessage(regNo) {
        if (validData(regNo) == false) {
            return "invalid data"
        }
    };


    function regNumExists(regNo) {

        if (allTheRegNums[regNo] === undefined) {
            allTheRegNums[regNo] = 1
        }
    }

    function keepRegNUm() {
        if (validData()) {
            var newList = Object.keys(allTheRegNums)
            return newList;
        }
    };

    function getRegNum() {
        return allTheRegNums
    };




    return {
        // displayRegNums,
        validData,
        invalidMessage,
        regNumExists,
        keepRegNUm,
        getRegNum

    }


}