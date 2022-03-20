# Team Profile Builder
<img src="https://img.shields.io/badge/license-MIT-green.svg">
    
## Description
This is a Command-Line Application which asks the user a series of prompts about a software development team, and builds a custom web page that displays this information. The web page is built with semantic HTML and custom CSS, and the application itself is built with Javascript, utilising the Inquirer npm package. It can be tested with Jest.

### Demo Video
Here is a video of the application in use:  
https://drive.google.com/file/d/1LObQezEYOEeUoXYn5MPzJS528wPJb7fK/view  
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
* [Development](#future-development)
    
## Installation

1. Clone the repository to your machine. 
2. Use the command 'npm install' on the command line to install the required package (Inquirer) to the correct directory.
3. Make sure there is an 'output' directory within the main directory, and if there is not, create one.
4. Run the application by using the command 'node index.js' while in the main directory.

## Usage

1. Launch the application using the command 'node index.js' while in the main directory.
2. Answer a series of prompts that ask for basic employee information.
3. When information regarding all employees has been entered, select 'No thank you' when asked if you want to enter details for another employee.
4. The application will now build a team profile homepage and clone the sample css stylesheet.
5. These files will be in the directory './output'. Make sure to make a copy of these files before running the application again, as these files will be overwritten every time the application is run.

## License
      
This project is licensed under MIT.
    
## Contribution
Please feel free to contribute - contact me using the details below to get in touch.

## Tests

The application can be tested with Jest - tests have been created for each of the constructor classes, for employee, manager, engineer and intern. To see if these are working correctly, navigate to the containing directory. Make sure Jest has been installed ('npm install'), then use the command 'npm run test' to see all of the tests run. 

## Questions
If you have any questions about this project, please contact me at:  
Email: djbowen95@gmail.com  
GitHub: [djbowen95](https://github.com/djbowen95)  

## Future Development
Here are the ideas I would like to implement on this project in the future:
- Use Bootstrap or another CSS framework to make a more visually appealing page.
- Use validation for all the user input types to make sure the questions are answered correctly (check if its an integer with an override option, check emails are in the right format, etc.)
- Function to check if there is an ./output/ directory and create it if it does not exist.
- Custom paths / write a new path with the team name so that it is not rewritten each time.
- Display the exact path in the terminal rather than a relative path.
- Ask users to check if all their input is correct and if not, give them the option to change it.
- Tests for the render.js and terminal-prompts.js files.