const inquirer = require("inquirer")

const managerQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is the team managers name?"
    }, 
    {
        name: 'ID',
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

const employeeQuestions = [
    {
        name: "role",
        type: "list",
        message: "Choose the next employee you would like to add:",
        choices: ["Engineer", new inquirer.Separator(), "Intern"]
    },
    {
        name: "name",
        type: "input",
        message: "What is the employee's name?"
    }, 
    {
        name: 'ID',
        type: "input",
        message: "What is the employee's employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is the employee's email address?"
    },
    {
        name: "github",
        type: "input",
        message: "What is the engineer's Github username?",
        when: input => input.role === "Engineer"
    },
    {
        name: "school",
        type: "input",
        message: "What school is the intern attending?",
        when: input => input.role === "Intern"
    },
    {
        name: "confirm",
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Yes", new inquirer.Separator(), "No"]
    }

]

module.exports = {
    managerQuestions,
    employeeQuestions
}