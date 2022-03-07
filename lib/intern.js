const employee = require("./employee");
// Array of questions that should be always passed through inquirer.
const questions = [
  employee.questions[0],
  employee.questions[1],
  employee.questions[2],
  {
    type: "input",
    name: "school",
    message: "What is the name of this employee's school / college?",
  },
  employee.nextEmployee,
];
// Function to write an object of a class / return an object of a certain class.
function NewIntern(internAnswers) {
    this.type = "Intern";
    this.name = internAnswers.name; 
    this.school = internAnswers.school;
    this.email = internAnswers.email;
    this.id = internAnswers.id;
}

module.exports = { questions, NewIntern };
