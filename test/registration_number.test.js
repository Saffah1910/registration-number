

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
        it("should return CJ 73 in captital letters if it is entered in the textbox", function () {
            var regTest = RegistrationNumbers();
            assert.equal("CJ 73", regTest.validData("CJ 73"))
        });


    });
    // describe("Filter", function () {
    //     it("if town cape town is selected it should only display regitration numbers from that town", function () {
    //         var regTest = RegistrationNumbers();
    //         assert.equal("allTheRegNums.startsWith(CA)", regTest.filterTown("ca 123"))
    //     });
    //     // it("should not display the same registration number again",function(){

    //     // });

    //     it("if the registration number is GP 77 is entered it should return the message : Invalid data", function () {
    //         var regTest = RegistrationNumbers();
    //         assert.equal("invalid data", regTest.invalidMessage("GP 77"))
    //     });
    // });
    describe('filterTown', () => {
        it('should return true if the town is "capetown" and the reg number starts with "CA"', () => {
            var regTest = RegistrationNumbers();
            assert.equal(true, regTest.filterTown("ca 123"));
        });

        it('should return true if the town is "paarl" and the reg number starts with "CJ"', () => {
            var regTest = RegistrationNumbers();
            assert.equal([],regTest.filterTown("paarl", "CJ456"));
        });

        // Write other test cases for the remaining towns and their expected outputs
    });

});