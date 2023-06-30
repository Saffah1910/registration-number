

describe("Registartion numbers", function () {
    describe("Valid data", function () {

        it("should return CF 123 789 in captital letters if it is entered in the textbox", function () {
            var regTest = RegistrationNumbers();
            assert.equal("CF 123 789", regTest.validData("CF 123 789"))
        });
        it("should return CA 123 in captital letters if it is entered in the textbox", function () {
            var regTest = RegistrationNumbers();
            assert.equal("CA 123", regTest.validData("CA 123"))
        });
        it("should return CL 56 in captital letters if it is entered in the textbox", function () {
            var regTest = RegistrationNumbers();
            assert.equal("CL 56", regTest.validData("CL 56"))
        });
        it("should return CJ73 in captital letters if it is entered in the textbox", function () {
            var regTest = RegistrationNumbers();
            assert.equal("CJ73", regTest.validData("CJ73"))
        });


    });
    // describe("Errors", function () {
    //     it("if no data is entered it should return the message : Enter registration number", function () {
    //         var regTest = RegistrationNumbers();
    //         assert.equal("Enter registration number", regTest.validData(""))
    //     });
    //     // it("should not display the same registration number again",function(){

    //     // });

    //     it("if the registration number is GP 77 is entered it should return the message : Invalid data", function () {
    //         var regTest = RegistrationNumbers();
    //         assert.equal("invalid data", regTest.invalidMessage("GP 77"))
    //     });
    // });

});