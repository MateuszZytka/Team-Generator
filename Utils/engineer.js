employee = require("./employee")

class engineer extends employee {
    constructor(name, ID, email, github){
        super(name, ID, email)
        this.github = github
    }
    
    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = engineer