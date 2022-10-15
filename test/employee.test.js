const employee = require("../utils/employee");

describe(employee, () => {
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
}
)
})