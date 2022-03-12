const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "../source");
const output = path.resolve(__dirname, "../output");
const outputHTML = path.join(output, "index.html");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// function to sort objects by employee type.

// function to write HTML for the cards (manager, employee, intern).

function renderHTML () {
    const template = fs.readFileSync(path.resolve(source, "index.html"), "utf8");
    const newVersion = template.replace("TEAM-PLACEHOLDER", "Hello");
    fs.writeFileSync(path.join(output, "index.html"), template, "utf-8");
}

function cloneCSS () {
    const template = fs.readFileSync(path.resolve(source, "style.css"), "utf-8");
    fs.writeFileSync(path.join(output, "style.css"), template, "utf-8");
}

function render () {
    renderHTML();
    cloneCSS();
}

render();

module.exports = render;