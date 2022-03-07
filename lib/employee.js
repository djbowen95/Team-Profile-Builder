// Array of questions that should be always passed through inquirer.
const questions = [
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
];

const nextEmployee = {
  type: "list",
  name: "nextEmployee",
  message: "Would you like to enter the details of another employee?",
  choices: ["New Engineer", "New Intern", "No, thank you"],
};
// Function to write an object of a class / return an object of a certain class.
const constructor = "";

module.exports = { questions, nextEmployee, constructor };
