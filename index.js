// Import the three required npm packages to index.js.
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Constructors to build objects with different employee types.
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

// Render an HTML based on the user responses to prompts.
const { render } = require("./library/render");

// Store command-line prompts and question arrays separately the keep index file clean. 
const terminalPrompts = require("./library/terminal-prompts");
const questions = require("./library/questions");

let team = []; // Stores all employee details as the application runs. Needs to be global.

// Starts the application in the command line; prompts user for manager details (required).
function start() {
  terminalPrompts.begin();
  inquirer.prompt(questions.managerQs).then((answers) => {
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNo
    );
    team.push(newManager);
    chooseNextEmployee();
  });
}

// Prompts user for engineer details; builds and pushes employee object to storedTeam.
function createNewEngineer() {
  terminalPrompts.engineer();
  inquirer.prompt(questions.engineerQs).then((answers) => {
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    team.push(newEngineer);
    chooseNextEmployee();
  });
}

// Prompts user for intern details; builds and pushes employee object to storedTeam.
function createNewIntern() {
  terminalPrompts.intern();
  inquirer.prompt(questions.internQs).then((answers) => {
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    team.push(newIntern);
    chooseNextEmployee();
  });
}

// Asks user whether they want to input another employee's details.
// Will either run prompts for selected employee type, or render the HTML and end the application. 
function chooseNextEmployee() {
  terminalPrompts.next();
  inquirer.prompt(questions.nextEmp).then((employee) => {
    if (employee.nextEmployee === "New Intern") {
      createNewIntern();
    } else if (employee.nextEmployee === "New Engineer") {
      createNewEngineer();
    } else {
      terminalPrompts.end();
      render(team);
    }
  });
}

start(); // Initiate the application. 