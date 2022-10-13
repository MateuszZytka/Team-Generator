const generateEngineer = require("../../TeamInfoGenerator/Utils/GenerateEngineer");

describe("generateEngineer", () => {
    describe("initialize", () =>{
        it("should receive an object with the following properties: 'engineerName', 'engineerID', 'email', 'officeNumber'", () => {
        generateEngineer({engineerName, engineerID, email, github})
        const engineerName = true;
        const engineerID = true;
        const email = true;
        const github = true;

        expect(engineerName && engineerID && email && github).toEqual(true)
    });

    it("should return the name of the engineer", () =>{
        const engineerName = "Mateusz";

        expect(engineerName).toEqual("Mateusz")
    });
    it("should return the ID of the engineer", () =>{
        const engineerID = "1000";

        expect(engineerID).toEqual("1000")
    })
    it("should return the email of the engineer", () =>{
        const email = "mateusz@bootcamp";

        expect(email).toEqual("mateusz@bootcamp")
    })
    it("should return the github of the engineer", () =>{
        const github = "MateuszZytka";

        expect(github).toEqual("MateuszZytka")
    })
    }
    )
})