html= (teamCards) => { 
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
            <! Add cards for team members here >
            ${teamCards}
        </div>
  </body>`
}


managerInfo = (manager) =>{
    const {name, ID, email, officeNumber} = manager
return`
<div class = card>
    <h2>${name}</h2>
    <h3>Manager</h3>
        <ul>
            <li>ID: ${ID}</li>
            <li>Email: <a href = "${email}">${email}</a></li>
            <li>Office Number: ${officeNumber}</li>
        </ul>
 </div>`
}

engineerInfo = (engineer) => {
    const {name, ID, email, github} = engineer
    return`
<div class = card>
    <h2>${name}</h2>
    <h3>Engineer</h3>
        <ul>
            <li>ID: ${ID}</li>
            <li>Email: <a href="${email}">${email}</a></li>
            <li>Github: <a href="https://github.com/${github}">${github}</a></li>
        </ul>
</div>`
}

internInfo = (intern) => {
    const {name, ID, email, school} = intern
    return`
<div class = card>
    <h2>${name}</h2>
    <h3>Intern</h3>
        <ul>
            <li>ID: ${ID}</li>
            <li>Email: <a href="${email}">${email}</a></li>
            <li>School: ${school}</li>
        </ul>
    </div>`
}


generateHTML = data => {
    const teamArray = []
    for(let i = 0; i < data.length; i++){
        let member = data[i]
        let role = member.getRole()
        if (role === 'Manager') {
            const managerCard = managerInfo(member)
            teamArray.push(managerCard)
          } else if (role === 'Engineer') {
            const engineerCard = engineerInfo(member)
            teamArray.push(engineerCard)
          } else if (role === 'Intern') {
            const internCard = internInfo(member)
            teamArray.push(internCard)
          }
        }
        const teamCards = teamArray.join('')
        return html(teamCards)
    }


module.exports = generateHTML