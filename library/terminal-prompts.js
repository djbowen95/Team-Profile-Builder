function begin() {
    console.log("HELLO! Welcome to the Team Profile Builder.\n \n");
    console.log("This is a Command-Line Application that will build a Team Profile Homepage for your software development team, based on a series of command line prompts.\n");
    console.log("To begin - first answer these questions about the project leader.");
}

function next() {
    console.log("\nThe details for this employee are now saved.");
    console.log("Would you like to add details for another employee?");
}

function engineer() {
    console.log("\nPlease answer the following questions about your new engineer.")
}

function intern() {
    console.log("\nPlease answer the following questions about your new intern.")
}

function end() {
    console.log("\nYour page has now been built. You can view it at the following path: \n");
    console.log("   ./output/index.html");
    console.log("   ./output/style.css\n");
    console.log("Please make a copy of these files before using the application again, as they will be overwritten each time the application is run.")
    console.log("\nThank you for using the Team Profile Builder.")

}

module.exports = {begin, next, engineer, intern, end}
