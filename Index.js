const inquirer = require("inquirer");
const fs = require("fs")
const generateManager = require("./Utils/GenerateManager.js")
const { engineerOrIntern, questionsManager, questionsEngineer, questionsIntern, index } = require("./Utils/questions/Questions.js");
const html = ""


function init () {
    inquirer.prompt(questionsManager)
    .then ((answers) => {managerInfo = generateManager(answers)
        fs.writeFile("index.html", managerInfo, (err) =>
        err ? console.error(err) : console.log('File Saved'))
    addEmpolyee()
})
}

function addEmpolyee(){
    inquirer.prompt(engineerOrIntern) .then(response => {
        if (response.engineerOrIntern === "Engineer"){
            inquirer.prompt(questionsEngineer)
            .then ((answers) =>{
                const enigineerInfo = generateEngineer(answers) 
                fs.appendFile("index.html", enigineerInfo, (err) =>
                err ? console.error(err) : console.log('File Saved'))
                addEmpolyee()
            })
        } 
        else if (response.engineerOrIntern === "Intern"){
            inquirer.prompt(questionsIntern)
            .then ((answers) =>{
                const internInfo = generateIntern(answers) 
                fs.appendFile("index.html", internInfo, (err) =>
                err ? console.error(err) : console.log('File Saved'))
                addEmpolyee()
            })
        }
             else  if(response.engineerOrIntern === "Done"){
                fs.appendFile("index.html", `</div></body>`, (err) =>
                err ? console.error(err) : console.log('File Saved'))
            }
    })
    
}


init()

module.exports = addEmpolyee