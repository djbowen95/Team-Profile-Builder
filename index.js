const inquirer = require("inquirer");
const fs = require("fs"); // Do I need this?
const path = require("path"); // Do I need this?

const employee = require(".lib/employee.js"); // This might not be needed - pass through manager/engineer/intern?
const manager = require(".lib/manager.js");
const engineer = require(".lib/engineer.js");
const intern = require(".lib/intern.js")

// Inquirer - ask first questions (manager)
// Then, create object with responses
// Then, either run for engineer, intern, or end
// Engineer questions
// Intern questions
// Either run for engineer, intern, or end (repeated code)
// End and build web page. 