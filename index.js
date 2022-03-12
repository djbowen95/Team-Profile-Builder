const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

const render = require("./library/render");

// const terminalPrompts = require("./library/terminal-prompts");
const questions = require("./library/questions");

let storedTeam = [];

function start() {
    console.log("First, answer some questions about your project leader.")
    inquirer.prompt(questions.managerQs).then(answers => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNo);
        storedTeam.push(newManager);
        chooseNextEmployee();
});
};

function chooseNextEmployee () {
    inquirer.prompt(questions.nextEmp).then((employee) => {
        if (employee.nextEmployee === "New Intern") {
            createNewIntern();
        } else if (employee.nextEmployee === "New Engineer") {
            createNewEngineer();
        } else {
            console.log("Your team has been built.")
            console.log(storedTeam);
        }
      })
}

function createNewIntern() {
    console.log("Answer these questions about the intern you are creating a profile for.")
inquirer.prompt(questions.internQs).then(answers => {
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
    storedTeam.push(newIntern);
    chooseNextEmployee()
});
};

function createNewEngineer() {
    console.log("Answer these questions about the engineer you are creating a profile for.")
    inquirer.prompt(questions.engineerQs).then(answers => {
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        storedTeam.push(newEngineer);
        chooseNextEmployee();
});
};

start();