const Employee = require("./Employee"); // Can I do this with const {questions} = ~something~ instead?

class Engineer extends Employee {
  constructor (name, id, email, github) {
  super (name, id, email)
  this.github = github;
  }
  
  getGitHub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
