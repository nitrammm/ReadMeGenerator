// TODO: Include packages needed for this application
let generateMarkdown = require("./utils/generateMarkdown");
let fs = require("fs");
let inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },
    {
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, 
    {
        type: "input",
        message: "What is the user story?",
        name: "userstory"
    },
    {
        type: "input",
        message: "Please describe the repository.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please state your end goal.",
        name: "endgoal"
    },
    {
        type: "input",
        message: "Please list your collaborators.",
        name: "credits"
    },
    {
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices: [
            "APACHE 2.0",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },
];



inquirer.prompt(questions).then(function(data) {
    console.log(data);

    let content = generateMarkdown(data);
    fs.writeFile("./ReadMe.md", content, function(err) {
        if (err) throw err
        console.log("success");
    });
});
