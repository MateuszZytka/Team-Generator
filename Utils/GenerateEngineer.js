
const addEmpolyee = require("./questions/Questions")


function generateEngineer({ engineerName, engineerID, email, github }){
    addEmpolyee
    return`<div class = card>
    <h2>${engineerName}</h2>
    <h3>Engineer</h3>
<ul>
<li>ID: ${engineerID}</li>
<li>Email: <a href="${email}">${email}</a></li>
<li>Github: <a href="https://github.com/${github}">${github}</a></li>
</div>`
}


module.exports = generateEngineer