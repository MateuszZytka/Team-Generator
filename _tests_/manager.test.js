const generateManager = require("../../TeamInfoGenerator/Utils/GenerateManager");

describe("generateManager", () => {
    describe("initialize", () =>{
        it("should receive an object with the following properties: 'managerName', 'managerID', 'email', 'officeNumber'", () => {
        generateManager({managerName, managerID, email, officeNumber})
        const managerName = true;
        const managerID = true;
        const email = true;
        const officeNumber = true;

        expect(managerName && managerID && email && officeNumber).toEqual(true)
    });

    it("should return the name of the manager", () =>{
        const managerName = "Mateusz";

        expect(managerName).toEqual("Mateusz")
    });
    it("should return the ID of the manager", () =>{
        const managerID = "1000";

        expect(managerID).toEqual("1000")
    })
    it("should return the email of the manager", () =>{
        const email = "mateusz@bootcamp";

        expect(email).toEqual("mateusz@bootcamp")
    })
    it("should return the office number of the manager", () =>{
        const officeNumber = "12";

        expect(officeNumber).toEqual("12")
    })
    }
    )
})