employee = require("./employee")

class manager extends employee {
    constructor(name, ID, email, officeNumber){
        super(name, ID, email)
        this.officeNumber = officeNumber
    }

    getRole(){
        return"Manager"
    }
}

module.exports = manager