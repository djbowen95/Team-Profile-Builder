const inquirer = require("inquirer");
const fs = require("fs"); // Do I need this?
const path = require("path"); // Do I need this?

const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
// Terminal library? terminal1, terminal2, terminal3

let storedTeam = [];
function createNewTeam() {
    console.log("First, answer some questions about your project leader.")
    inquirer.prompt(manager.questions).then(managerAnswers => {
        const newManager = new manager.NewManager(managerAnswers);
        storedTeam.push(newManager);
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
        console.log(storedTeam);
    }
}
function createNewIntern() {
    console.log("Answer these questions about the intern you are creating a profile for.")
inquirer.prompt(intern.questions).then(managerAnswers => {
    // storedTeam.push(managerAnswers);
    createNewEmployee(managerAnswers.nextEmployee);
});
};

function createNewEngineer() {
    console.log("Answer these questions about the engineer you are creating a profile for.")
    inquirer.prompt(engineer.questions).then(managerAnswers => {
        // storedTeam.push(managerAnswers);
        createNewEmployee(managerAnswers.nextEmployee);
});
};

createNewTeam();


// Inquirer - ask first questions (manager)
// Then, create object with responses
// Then, either run for engineer, intern, or end
// Engineer questions
// Intern questions
// Either run for engineer, intern, or end (repeated code)
// End and build web page. 