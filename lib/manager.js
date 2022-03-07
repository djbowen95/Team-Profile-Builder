const employee = require("./employee");

// Array of questions that should be always passed through inquirer.
const questions = [
  employee.questions[0],
  employee.questions[1],
  employee.questions[2],
  {
    type: "input",
    name: "officeNo",
    message: "What is the office number for this employee and their team?",
  },
  employee.nextEmployee,
];
// Function to write an object of a class / return an object of a certain class.
function NewManager(managerAnswers) {
    this.type = "Manager";
    this.name = managerAnswers.name; 
    this.officeid = managerAnswers.officeNo;
    this.email = managerAnswers.email;
    this.id = managerAnswers.id;
}

module.exports = { questions, NewManager };
