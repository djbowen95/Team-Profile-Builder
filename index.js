const inquirer = require("inquirer");
const fs = require("fs"); // Do I need this?
const path = require("path"); // Do I need this?

const employee = require("./lib/employee"); // This might not be needed - pass through manager/engineer/intern?
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

function createNewManager() {
    inquirer.prompt(manager.questions).then(managerAnswers => {
        console.log(managerAnswers);
        createNewIntern();
});
};

function createNewIntern() {
inquirer.prompt(intern.questions).then(managerAnswers => {
    console.log(managerAnswers);
    createNewEngineer();
});
};

function createNewEngineer() {
    inquirer.prompt(engineer.questions).then(managerAnswers => {
        console.log(managerAnswers);
        console.log("Finished");
});
};

createNewManager();

// Inquirer - ask first questions (manager)
// Then, create object with responses
// Then, either run for engineer, intern, or end
// Engineer questions
// Intern questions
// Either run for engineer, intern, or end (repeated code)
// End and build web page. 