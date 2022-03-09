const inquirer = require("inquirer");
const fs = require("fs"); // Do I need this?
const path = require("path"); // Do I need this?

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Terminal library? terminal1, terminal2, terminal3

let storedTeam = [];
function createNewTeam() {
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