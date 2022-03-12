const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

const render = require("./library/render");

const terminalPrompts = require("./library/terminal-prompts");
const questions = require("./library/questions");

let storedTeam = [];

function start() {
  terminalPrompts.begin();
  inquirer.prompt(questions.managerQs).then((answers) => {
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNo
    );
    storedTeam.push(newManager);
    chooseNextEmployee();
  });
}

function createNewEngineer() {
  terminalPrompts.engineer();
  inquirer.prompt(questions.engineerQs).then((answers) => {
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    storedTeam.push(newEngineer);
    chooseNextEmployee();
  });
}

function createNewIntern() {
  terminalPrompts.intern();
  inquirer.prompt(questions.internQs).then((answers) => {
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    storedTeam.push(newIntern);
    chooseNextEmployee();
  });
}

function chooseNextEmployee() {
  terminalPrompts.next();
  inquirer.prompt(questions.nextEmp).then((employee) => {
    if (employee.nextEmployee === "New Intern") {
      createNewIntern();
    } else if (employee.nextEmployee === "New Engineer") {
      createNewEngineer();
    } else {
      terminalPrompts.end();
      console.log(storedTeam);
    }
  });
}

start();