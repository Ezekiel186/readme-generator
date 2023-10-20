// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project's title?"
},
{ 
    type: "input",
    name: "description",
    message: "Write your project's description:"
}, 
{   
    type: "input",
    name: "table",
    message: "What are your README's table of contents?"
},
{
    type: "input",
    name: "installation",
    message: "How will other people install your project?"
}, 
{
    type: "input",
    name: "usage",
    message: "How will your project be used?"
}, 
{
    type: "list",
    name: "license",
    message: "What is your project's license?",
    choices: ["None","Apache License 2.0","GNU General Public License v3.0","MIT License",'BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License',"Boost Software License 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU Affero General Public License v3.0","GNU General Public License v2.0","GNU Lesser General Public License v2.1","Mozilla Public License 2.0","The Unlicense"]
}, 
{
    type: "input",
    name: "contributing",
    message: "How can others contribute to the project?"
}, 
{
    type: "input",
    name: "tests",
    message: "What tests have you done with the project?"
},
{
    type: "input",
    name: "github",
    message: "What is your github username?",
//     validate: function (input) { 
//         var validUrl = "https://github.com/" + input
    
//     fetch(validUrl)
//     .then((response) => {
//       if (response.ok) {
//         console.log(`${input} is valid.`);
//       } else {
//         console.error(`${input} is not a valid account`);
//       }
//     })
// }
},
{
    type: "input",
    name: "email",
    message: "What is your email?",
}];

function makeReadMe(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
${data.table}
        
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
## Installation
${data.installation}
        
## Usage
${data.usage}

## License
${data.license}
                    
## How to Contribute
${data.contributing}    

## Tests
${data.tests}

## Credits
${data.github}
${data.email}
`
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('newREADME.md',data,err => {
            if (err) {
                reject(err);
                return;
            } resolve({
                ok: true,
                message: console.log("New file created")
            }) 
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(input => {return makeReadMe(input)})
    .then(data => {return writeToFile(questions.name, data)})
}

// Function call to initialize app
init()
