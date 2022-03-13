const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "../source");
const output = path.resolve(__dirname, "../output");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// function to sort objects by employee type.
function orderEmployees(team) {
    const managers = team.filter(employee => employee.getRole() === "Manager");
    const engineers = team.filter(employee => employee.getRole() === "Engineer");
    const interns = team.filter(employee => employee.getRole() === "Intern");
    return [managers, engineers, interns];
}

// function to write HTML for the cards (manager, employee, intern).
function buildHTMLCards (managers, engineers, interns) {
    let cardHTML = "";

    managers.forEach(manager => {
        cardHTML = cardHTML.concat(`
        <article class="employee-card">
            <h2>${manager.getRole()}</h2>
            <ul>
                <li><strong>Name</strong>: ${manager.getName()}</li>
                <li><strong>ID Number</strong>: ${manager.getId()}</li>
                <li><strong>Email</strong>: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li><strong>Office Number</strong>: ${manager.getOfficeNo()}</li>
            </ul>
        </article>
        `)
    })

    engineers.forEach(engineer => {
        cardHTML = cardHTML.concat(`
        <article class="employee-card">
            <h2>${engineer.getRole()}</h2>
            <ul>
                <li><strong>Name</strong>: ${engineer.getName()}</li>
                <li><strong>ID Number</strong>: ${engineer.getId()}</li>
                <li><strong>Email</strong>: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li><strong>GitHub</strong>: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
            </ul>
        </article>
        `)
    })

    interns.forEach(intern => {
        cardHTML = cardHTML.concat(`
        <article class="employee-card">
            <h2>${intern.getRole()}</h2>
            <ul>
                <li><strong>Name</strong>: ${intern.getName()}</li>
                <li><strong>ID Number</strong>: ${intern.getId()}</li>
                <li><strong>Email</strong>: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li><strong>School</strong>: ${intern.getSchool()}</li>
            </ul>
        </article>
        `)
    })
    return cardHTML;
}

function renderHTML (cardHTML) {
    const template = fs.readFileSync(path.resolve(source, "index.html"), "utf8");
    const newVersion = template.replace("TEAM-PLACEHOLDER", cardHTML);
    fs.writeFileSync(path.join(output, "index.html"), newVersion, "utf-8");
}

function cloneCSS () {
    const template = fs.readFileSync(path.resolve(source, "style.css"), "utf-8");
    fs.writeFileSync(path.join(output, "style.css"), template, "utf-8");
}

function render (input) {
    const employees = orderEmployees(input);
    const cardHTML = buildHTMLCards(employees[0], employees[1], employees[2]);
    renderHTML(cardHTML);
    cloneCSS();
}

module.exports = { render };