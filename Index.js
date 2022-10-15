const inquirer = require("inquirer");
const fs = require("fs")
const { managerQuestions, employeeQuestions } = require("./questions/Questions")
const manager = require("./Utils/manager")
const engineer = require("./Utils/engineer")
const intern = require("./Utils/intern")
const generateHTML = require("./html-template/html");
// const html = ""

const teamArray = []

const addManager = () => {
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            const { name, ID, email, officeNumber } = answers;
            const Manager = new manager(name, ID, email, officeNumber)
            teamArray.push(Manager)
            addEmpolyee()

        })
}

const addEmpolyee = () => {
    inquirer.prompt(employeeQuestions)
        .then((answers) => {
            const { role, name, ID, email, github, school, confirm } = answers
            if (role === "Engineer") {
                const Engineer = new engineer(name, ID, email, github)
                teamArray.push(Engineer)
                if (confirm === "Yes") {
                    addEmpolyee()
                } else {
                    let html = generateHTML(teamArray)
                    writeHTML(html)
                    return 
                }
            } else if (role === "Intern") {
                const Intern = new intern(name, ID, email, school)
                teamArray.push(Intern)
                if (confirm === "Yes") {
                    addEmpolyee()
                } else {
                    let html = generateHTML(teamArray)
                    writeHTML(html)
                    return 
                }
            }
        })
}

function writeHTML(data) {
    fs.writeFile("index.html", data, (err) => err ? console.error(err) : console.log('File Saved'));
}



addManager()
