describe("Registartion numbers", function () {
    describe("Inputs and Valid data", function () {

        it("should return CF 123 789 if it is entered in the textbox", function () {
            var regTest = RegistrationNumbers();
            assert.equal("CF 123 789", regTest.validData("CF 123 789"))
        });
        it("if not data is entered it should return the message : Enter registration number", function () {
            var regTest = RegistrationNumbers();
            assert.equal("Enter registration number", regTest.validData(""))
        });
        // it("if the registration number CA 123 456 is entered it should return true", function () {

        //     var regTest = RegistrationNumbers();
        //     assert.equal(true, regTest.validData("CA 123 456"))
        // });
        it("if the registration number is GP 77 is entered it should return the message 'invalid data'", function () {
            var regTest = RegistrationNumbers();
            assert.equal("invalid data", regTest.invalidMessage("GP 77"))
        });
    });
});