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
            allTheRegNums[regNo] = 1
        }
    }
    function getRegNo() {
        return allTheRegNums
    };

    function displayNewName(regNo) {
        if (allTheRegNums.includes(regNo)) {

            console.log(`${regNo} has already been displayed.`);
        } else {
            console.log(`Displaying ${regNo} on the screen.`);
            allTheRegNums.push(regNo);
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
            return allTheRegNums.startsWith("CA")
        }
        if(town === "paarl"){
            return allTheRegNums.startsWith("CJ")
        }
        if(town === "malmesbury"){
            return allTheRegNums.startsWith("CF")
        }
        if(town === "stellenbosch"){
            return allTheRegNums.startsWith("CL")
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


