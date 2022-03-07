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
    inquirer.prompt(manager.questions).then(answers => {
        const newManager = new manager.NewManager(answers);
        storedTeam.push(newManager);
        createNewEmployee(answers.nextEmployee);
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
inquirer.prompt(intern.questions).then(answers => {
    const newIntern = new intern.NewIntern(answers);
    storedTeam.push(newIntern);
    createNewEmployee(answers.nextEmployee);
});
};

function createNewEngineer() {
    console.log("Answer these questions about the engineer you are creating a profile for.")
    inquirer.prompt(engineer.questions).then(answers => {
        const newEngineer = new engineer.NewEngineer(answers);
        storedTeam.push(newEngineer);
        createNewEmployee(answers.nextEmployee);
});
};

// Function to start constructing page
// forEach iterator to write new element / card on the page
// Write the end of the page
// Write the CSS

createNewTeam();


// Inquirer - ask first questions (manager)
// Then, create object with responses
// Then, either run for engineer, intern, or end
// Engineer questions
// Intern questions
// Either run for engineer, intern, or end (repeated code)
// End and build web page. 