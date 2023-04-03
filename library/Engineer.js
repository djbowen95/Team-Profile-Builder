const Employee = require("./Employee"); // Can I do this with const {questions} = ~something~ instead?

class Engineer extends Employee {
  constructor (name, id, email, gitHub) {
  super (name, id, email)
  this.gitHub = gitHub;
  }
  
  getGitHub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
