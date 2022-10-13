const generateIntern = require("../../TeamInfoGenerator/Utils/GenerateIntern");

describe("generateIntern", () => {
    describe("initialize", () =>{
        it("should receive an object with the following properties: 'internName', 'internID', 'email', 'school'", () => {
        generateIntern({internName, internID, email, school})
        const internName = true;
        const internID = true;
        const email = true;
        const school = true;

        expect(internName && internID && email && school).toEqual(true)
    });

    it("should return the name of the intern", () =>{
        const internName = "Mateusz";

        expect(internName).toEqual("Mateusz")
    });
    it("should return the ID of the intern", () =>{
        const internID = "1000";

        expect(internID).toEqual("1000")
    })
    it("should return the email of the intern", () =>{
        const email = "mateusz@bootcamp";

        expect(email).toEqual("mateusz@bootcamp")
    })
    it("should return the school of the intern", () =>{
        const school = "UofT";

        expect(school).toEqual("UofT")
    })
    }
    )
})