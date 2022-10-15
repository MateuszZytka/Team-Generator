const manager = require("../utils/manager");

describe(manager, () => {
    describe("initialize", () =>{

    it("should return the name of the manager", () =>{
        const name = "Mateusz";

        expect(name).toEqual("Mateusz")
    });
    it("should return the ID of the manager", () =>{
        const ID = "1000";

        expect(ID).toEqual("1000")
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