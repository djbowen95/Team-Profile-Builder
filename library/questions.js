// Ask the manager their name, id number, email and office number. 
const managerQs = [
    {
      type: "input",
      name: "name",
      message: "What is the name of this employee?",
    },
    {
      type: "input",
      name: "id",
      message: "What is this employee's identification (ID) number?",
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
  ];

// Ask the engineer their name, id number, email and github account name. 
  const engineerQs = [{
    type: "input",
    name: "name",
    message: "What is the name of this employee?",
  },
  {
    type: "input",
    name: "id",
    message: "What is this employee's identification (ID) number?",
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
  }
];

// Ask the intern their name, id number, email and the name of their school. 
const internQs = [{
    type: "input",
    name: "name",
    message: "What is the name of this employee?",
  },
  {
    type: "input",
    name: "id",
    message: "What is this employee's identification (ID) number?",
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
];

// Ask the next employee type (engineer or intern), or end the application.
const nextEmp = [{
    type: "list",
    name: "nextEmployee",
    message: "Would you like to enter the details of another employee?",
    choices: ["New Engineer", "New Intern", "No, thank you"],
  },
];

module.exports = {managerQs, internQs, engineerQs, nextEmp}