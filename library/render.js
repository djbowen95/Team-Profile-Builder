const fs = require("fs");
const path = require("path");

const HTML = path.resolve(__dirname, "../HTML");
const output = path.resolve(__dirname, "../output");
const outputHTML = path.join(output, "index.html");

function cloneHTML () {
    const template = fs.readFileSync(path.resolve(HTML, "index.html"), "utf8");
    fs.writeFileSync(outputHTML, template, "utf8");
}

function cloneCSS () {
    const template = fs.readFileSync(path.resolve(HTML, "style.css"), "utf-8");
    fs.writeFileSync(path.join(output, "style.css"), template, "utf-8");
}


cloneHTML();
cloneCSS()