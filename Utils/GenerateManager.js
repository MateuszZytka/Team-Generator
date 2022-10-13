const addEmpolyee = require("../Index")

function generateManager({ managerName, managerID, email, officeNumber })  {
    addEmpolyee 
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./CSS/style.css">
    <title>Team Generator</title>
  </head>
  <body>
  <header><h1>Team Members</h1></header>
  <div class = container>
  <div class = card>
  <h2>${managerName}</h2>
  <h3>Manager</h3>
  <ul>
  <li>ID: ${managerID}</li>
  <li>Email: <a href = "${email}">${email}</a></li>
  <li>Office Number: ${officeNumber}</li>
  </div>`
}


  module.exports =  generateManager