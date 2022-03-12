const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "../source");
const output = path.resolve(__dirname, "../output");
const outputHTML = path.join(output, "index.html");

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
                <li><em>Name</em>: ${manager.getName()}</li>
                <li><em>ID Number</em>: ${manager.getId()}</li>
                <li><em>Email</em>: ${manager.getEmail()}</li>
                <li><em>Office Number</em>: ${manager.getOfficeNo()}</li>
            </ul>
        </article>
        `)
    })

    engineers.forEach(engineer => {
        cardHTML = cardHTML.concat(`
        <article class="employee-card">
            <h2>${engineer.getRole()}</h2>
            <ul>
                <li><em>Name</em>: ${engineer.getName()}</li>
                <li><em>ID Number</em>: ${engineer.getId()}</li>
                <li><em>Email</em>: ${engineer.getEmail()}</li>
                <li><em>GitHub</em>: ${engineer.getGitHub()}</li>
            </ul>
        </article>
        `)
    })

    interns.forEach(intern => {
        cardHTML = cardHTML.concat(`
        <article class="employee-card">
            <h2>${intern.getRole()}</h2>
            <ul>
                <li><em>Name</em>: ${intern.getName()}</li>
                <li><em>ID Number</em>: ${intern.getId()}</li>
                <li><em>Email</em>: ${intern.getEmail()}</li>
                <li><em>School</em>: ${intern.getSchool()}</li>
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