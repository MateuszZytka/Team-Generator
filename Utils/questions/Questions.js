const inquirer = require("inquirer")
const index = ""
generateEngineer = require('../GenerateEngineer')
generateIntern = require('../GenerateIntern')


const questionsManager = [
    {
    name: "managerName",
    type: "input",
    message: "What is the team manangers name?"
}, 
{
        name: 'managerID',
        type: "input",
        message: 'What is the managers employee ID?'
},
{
    name: "email",
    type: "input",
    message: "What is the manager's email address?"
},
{
    name: "officeNumber",
    type: "input",
    message: "What is the manager's office number?"
}
]

const questionsEngineer = [
    {
        name: "engineerName",
        type: "input",
        message: "What is the Engineer's name?"
    }, 
    {
        name: 'engineerID',
        type: "input",
        message: "What is the engineer's employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is the engineer's email address?"
    },
    {
        name: "github",
        type: "input",
        message: "What is the engineer's Github username?"
    }
]

const  questionsIntern = [
    {
        name: "internName",
        type: "input",
        message: "What is the intern's name?"
    }, 
    {
        name: 'internID',
        type: "input",
        message: "What is the intern's employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is the intern's email"
    },
    {
        name: "school",
        type: "input",
        message: "What school is the intern enrolled at currently?"
    }
]

const engineerOrIntern = [
    {
        name: "engineerOrIntern",
        type: "list",
        message: "Would you like to add an engineer's or intern's information next? If you are finished adding your emplyees you may select Done.",
        choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(), "Done"]
    }
]




module.exports = {  questionsManager, questionsEngineer, questionsIntern, index, engineerOrIntern }