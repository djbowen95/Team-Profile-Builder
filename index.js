const inquirer = require("inquirer");
const fs = require("fs"); // Do I need this?
const path = require("path"); // Do I need this?

const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

function createNewManager() {
    inquirer.prompt(manager.questions).then(managerAnswers => {
        console.log(managerAnswers);
        createNewEmployee(managerAnswers.nextEmployee);
});
};

function createNewEmployee(employee) {
    if (employee === "New Intern") {
        createNewIntern();
    } else if (employee === "New Engineer") {
        createNewEngineer();
    } else {
        console.log("Your team has been built.")
    }
}
function createNewIntern() {
inquirer.prompt(intern.questions).then(managerAnswers => {
    console.log(managerAnswers);
    createNewEmployee(managerAnswers.nextEmployee);
});
};

function createNewEngineer() {
    inquirer.prompt(engineer.questions).then(managerAnswers => {
        console.log(managerAnswers);
        createNewEmployee(managerAnswers.nextEmployee);
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