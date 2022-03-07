const employee = require("./employee"); // Can I do this with const {questions} = ~something~ instead?

// Array of questions that should be always passed through inquirer.
const questions = [
  employee.questions[0],
  employee.questions[1],
  employee.questions[2],
  {
    type: "input",
    name: "github",
    message: "What username does this employee use on GitHub?",
  },
  employee.nextEmployee,
];

// Function to write an object of a class / return an object of a certain class.
function NewEngineer(engineerAnswers) {
    this.type = "Engineer";
    this.name = engineerAnswers.name; 
    this.github = engineerAnswers.github;
    this.email = engineerAnswers.email;
    this.id = engineerAnswers.id;
}


module.exports = { questions, NewEngineer };
