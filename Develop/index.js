// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
    inquirer.prompt([
    {
        type: "input",
        name: "ProjectTitle",
        message: "Type in the README Title: ",
    },
    {
        type: "input",
        name: "TableOfContents",
        message: "Type in README Table of Contents: ",
    },
    {
        type: "input",
        name: "Projectdescription",
        message: "Describe the project: ",
    },
    {
        type: "input",
        name: "installionInstructions",
        message: "Advise the commands needed to run the installion of the README generators: ",
    },
    {
        type: "input",
        name: "usageInstructions",
        message: "Describe how to use the README generator: ",
    },
    {
        type: "input",
        name: "contributionGuide",
        message: "Name any contributors to the project: ",
    },
    {
        type: "input",
        name: "tests",
        message: "Commands that should be run to run tests README generator: ",
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Add in your Github User Name: ",
    },
    {
        type: "list",
        name: "license",
        message: "Add in README License: ",
        choices: [
            "MIT"
        ]
    } 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        console.log(err);
        }
    });
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
