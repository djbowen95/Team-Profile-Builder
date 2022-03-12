const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "../source");
const output = path.resolve(__dirname, "../output");
const outputHTML = path.join(output, "index.html");


function renderHTML () {
    const template = fs.readFileSync(path.resolve(source, "index.html"), "utf8");
    const newVersion = template.replace("{{ team }}", "Hello");
    console.log(typeof(template))
    console.log(newVersion);
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

//cloneHTML();
//cloneCSS();

/*
const render = html => {
    const template = fs.readFileSync(path.resolve(HTML, "index.html"), "utf8");
    return replacePlaceholders(template, "team", "Hello");
  };


render();

    console.log(template);
    console.log(typeof(template))
    // const newVersion = replacePlaceholders(template, "team", "Hello");
    // console.log(newVersion);
    // fs.writeFileSync(outputHTML, newHTMLfile, "utf8");


const newName = process.argv[2];
stringReplacer(oldString, newName);

const oldString = "Hello my name is Daniel";
function stringReplacer (oldString, newName) {
    const newString = oldString.replace("Daniel", `${newName}`);
    console.log(newString);
}

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

  */