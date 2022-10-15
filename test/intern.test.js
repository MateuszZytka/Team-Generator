const intern = require("../utils/intern");

describe(intern, () => {
    describe("initialize", () =>{

    it("should return the name of the intern", () =>{
        const name = "Mateusz";

        expect(name).toEqual("Mateusz")
    });
    it("should return the ID of the intern", () =>{
        const ID = "1000";

        expect(ID).toEqual("1000")
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