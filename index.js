const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name/title of your project?", // question for title section
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of this project", // question of description section
    },
    {
        type: "input",
        name: "link",
        message: "please provide the URL to your deployed site", // question for link to deployed site
    },
    {
        type: "checkbox",
        name: "license",
        message: "please choose the license that you used for this project",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    }, // question to choose what license you have used 
    {
        type: "input",
        name: "usage",
        message: "What technologies are used in this project", // question for technologies used 
    },
    {
        type: "input",
        name: "features",
        message: "List the top features of this project", // question for project features
    },
    {
        type: "input",
        name: "name",
    message: "What is your name.", // question for name
    },
    {
        type: "input",
        name: "creator",
    message: "What is your GitHub username.", // question for github username/repo
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.", // question for creators email
      },
      {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "", // question for anyone who had contributed to the project
      },
      {
        type: "input",
        name: "test",
        message: "If applicable, what tests are required for this application", // question for tests available for this application
      },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Please wait while we create your professional README.md file");
        writeToFile("./output/README.md", generateMarkdown({ ...responses }));
})
};

// function call to initialize program
init();
