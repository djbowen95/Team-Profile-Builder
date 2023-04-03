// Prompts to run when the application begins; the introduce questions about the manager/project leader. 
function begin() {
    console.log("HELLO! Welcome to the Team Profile Builder.\n \n");
    console.log("This is a Command-Line Application that will build a Team Profile Homepage for your software development team, based on a series of command line prompts.\n");
    console.log("To begin - first answer these questions about the project leader.");
};

// Prompt to run when the user chooses to create a 'new engineer'.
function engineer() {
    console.log("\nPlease answer the following questions about your new engineer.")
};

// Prompt to run when the user chooses to create a 'new intern'.
function intern() {
    console.log("\nPlease answer the following questions about your new intern.")
};

// Prompts to guide the user when they need to choose a new employee type, or end the application.
function next() {
    console.log("\nThe details for this employee are now saved.");
    console.log("Would you like to add details for another employee?");
};

// Prompts to run once the user has chosen to end the application.
function end() {
    console.log("\nYour page has now been built. You can view it at the following path: \n");
    console.log("   ./output/index.html");
    console.log("   ./output/style.css\n");
    console.log("Please make a copy of these files before using the application again, as they will be overwritten each time the application is run.")
    console.log("\nThank you for using the Team Profile Builder.")
};

module.exports = {begin, engineer, intern, next, end};