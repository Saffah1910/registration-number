function RegistrationNumbers(regNo) {
    var allTheRegNums = [];



    function validData(regNo) {
        if (regNo !== "") {
          
            allTheRegNums.push(regNo)
            return allTheRegNums;
        }
       
    };
    function addRed(){ 
            return "red"
        
    };
    // function filterTown(){
    //     if (town === "capetown"){
    //         return allTheRegNums.startsWith("CA")
    //     }
    //     if(town === "paarl"){
    //         return allTheRegNums.startsWith("CJ")
    //     }
    //     if(town === "vredenburg"){
    //         return allTheRegNums.startsWith("CF")
    //     }
    //     if(town === "stellenbosch"){
    //         return allTheRegNums.startsWith("CL")
    //     }
    //     if(town === "allTowns"){
    //         return allTheRegNums
    //     }
    // }

    return {

        validData,
        addRed,
        // filterTown
      

    }


}


