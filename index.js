// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
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
    choices: ["None","Apache License 2.0","MIT License","Boost Software License 1.0","Mozilla Public License 2.0"]
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
},
{
    type: "input",
    name: "email",
    message: "What is your email?",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${fileName}.md`,data,err => {
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
        .then(input => {
            writeToFile(input.title, generateMarkdown(input))
        })
}

// Function call to initialize app
init()
