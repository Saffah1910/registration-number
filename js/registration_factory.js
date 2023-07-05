function RegistrationNumbers(regNo) {
    var allTheRegNums = [];

    function validData(regNo) {
        if (regNo !== "") {

            allTheRegNums.push(regNo)
            return allTheRegNums;
        }

    };
  
    function existRegNo(regNo) {
        if (allTheRegNums[regNo] === undefined) {
            allTheRegNums.push(regNo);
            allTheRegNums[regNo] = 1

        }
    }

    function getRegNo() {
        return allTheRegNums
    };

    function displayNewName(regNo) {
        if (allTheRegNums.includes(regNo)) {


            // console.log(`${regNo} has already been displayed.`);
            console.log("Registration number alreday exists") 
        } else {
            // console.log(`Displaying ${regNo} on the screen.`);
            allTheRegNums.push(regNo);
            return regNo
        }
    }
    function addRed() {
        return "red"

    };
    function addNumberPlate() {
        return "numberPlate"
    }
    function addFont() {
        return "font"
    }
    function addCenter() {
        return "text-align"
    }
    function filterTown(town){
        if (town === "capetown"){
            return allTheRegNums
        }
        if(town === "paarl"){
            return allTheRegNums
        }
        if(town === "malmesbury"){
            return allTheRegNums
        }
        if(town === "stellenbosch"){
            return allTheRegNums
        }
        if(town === "allTowns"){
            return allTheRegNums
        }
    }

    return {

        validData,
        addRed,
        addNumberPlate,
        addFont,
        addCenter,
        existRegNo,
        getRegNo,
         displayNewName,
        filterTown


    }


}


