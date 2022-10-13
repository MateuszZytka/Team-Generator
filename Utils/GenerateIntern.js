

const addEmpolyee = require("../Index")

function generateIntern({ internName, internID, email, school}){
    addEmpolyee
    return `<div class = card>
<h2>${internName}</h2>
<h3>Intern</h3>
<ul>
<li>ID: ${internID}</li>
<li>Email: <a href="${email}">${email}</a></li>
<li>School: ${school}</li>
</div>`
}

module.exports = generateIntern