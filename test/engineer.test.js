const engineer = require("../utils/engineer");

describe(engineer, () => {
    describe("initialize", () =>{

    it("should return the name of the engineer", () =>{
        const name = "Mateusz";

        expect(name).toEqual("Mateusz")
    });
    it("should return the ID of the engineer", () =>{
        const ID = "1000";

        expect(ID).toEqual("1000")
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