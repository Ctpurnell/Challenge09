// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    question: "What is your title?",
    titleInput: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubUsername",
    question: "What is your GitHub username?",
    titleInput: (gitHubInput) => {
      if (gitHubInput) {
        return true;
      } else {
        console.log("plese enter your GitHub username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "what",
    message: "What is your project and what problem will it solve?",
    validate: (whatInput) => {
      if (whatInput) {
        return true;
      } else {
        console.log("Please enter what your project is.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "why",
    message: "Why did you build this project?",
    validate: (whyInput) => {
      if (whyInput) {
        return true;
      } else {
        console.log("Please enter why you created this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "how",
    message: "What problem will this solve?",
    validate: (howInput) => {
      if (howInput) {
        return true;
      } else {
        console.log("Please enter what this will solve.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions.",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please provide installation instructions.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use.",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter your use instructions.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["agpl", "apache", "mit", "no license"],
  },
  {
    type: "confirm",
    name: "confirmContributers",
    message: "Would you like to allow other developers to contribute?",
    default: true,
  },

  {
    type: "input",
    name: "test",
    message: "Please provide instructions on how to test the app.",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter your use test instructions.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('.README.md', fileContent, err => {
          if (err) {
              reject(err);
              return;
          }

          resolve({
              ok: true,
              message: 'Success!'
          });
      });
  });
};


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
