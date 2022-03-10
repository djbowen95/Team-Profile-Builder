const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

const render = require("./library/render");

// const terminalPrompts = require("./library/terminal-prompts");
// const questions = require("./library/questions");

let storedTeam = [];
function startTeamBuild() {
    console.log("First, answer some questions about your project leader.")
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of this employee?",
        },
        {
          type: "input",
          name: "id",
          message: "What is this employee's identification (ID) number??",
        },
        {
          type: "input",
          name: "email",
          message: "What is this employee's email address?",
        },
        {
            type: "input",
            name: "officeNo",
            message: "What is the office number for this employee and their team?",
        },
      ]).then(answers => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNo);
        storedTeam.push(newManager);
        chooseNextEmployee();
});
};

function chooseNextEmployee () {
    inquirer.prompt([{
        type: "list",
        name: "nextEmployee",
        message: "Would you like to enter the details of another employee?",
        choices: ["New Engineer", "New Intern", "No, thank you"],
      },]).then((employee) => {
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
inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is the name of this employee?",
  },
  {
    type: "input",
    name: "id",
    message: "What is this employee's identification (ID) number??",
  },
  {
    type: "input",
    name: "email",
    message: "What is this employee's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the name of this employee's school / college?",
  },
]
  ).then(answers => {
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
    storedTeam.push(newIntern);
    chooseNextEmployee()
});
};

function createNewEngineer() {
    console.log("Answer these questions about the engineer you are creating a profile for.")
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name of this employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is this employee's identification (ID) number??",
      },
      {
        type: "input",
        name: "email",
        message: "What is this employee's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What username does this employee use on GitHub?",
      }]).then(answers => {
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        storedTeam.push(newEngineer);
        chooseNextEmployee();
});
};

startTeamBuild();