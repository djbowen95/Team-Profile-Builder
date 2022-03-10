const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "../source");
const output = path.resolve(__dirname, "../output");
const outputHTML = path.join(output, "index.html");
const outputCSS = path.join(output, "style.css");

fs.writeFileSync(outputHTML, "Something New", "UTF-8");
fs.writeFileSync(outputCSS, "Another New Thing", "UTF-8");

/*
const render = html => {
    const template = fs.readFileSync(path.resolve(source, "index.html"), "utf8");
    return replacePlaceholders(template, "team", "Hello");
  };

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    console.log(pattern);
    // return template.replace(pattern, value);
  };

render();
*/