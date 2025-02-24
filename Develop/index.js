// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import colors from "colors";

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is your Github username?",
        name: "username",
        type: "text"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "text"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
     },
     {
        type: "input",
        message: "Describe your project.",
        name: "description",
     },
//    {
//        type: "input",
//        message: "Do you have a table of contents?",
//        name: "tableOfContents",
//    },
   {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
   },
   {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
   },
   {
    type: "input",
    message: "Do you have any credits?",
    name: "credits",
   },
   {
    type: "list",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
    message: "What license would you like to use?",
    name: "license",
   },
    
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    const { username, email, title, description, installation, usage, license, contributing, tests } = data;
    console.log(data);


    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("README.md has been created");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
