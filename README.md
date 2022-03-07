# Team Profile Builder!
## Description
This is a command line application that asks the user to answer a series of prompts about their team. It then takes these answers and uses them to build a web page that displays employee cards containing this key information.  
  
It is built in Node.JS with the Inquirer npm package. There are built in tests, which can be run using the Jest npm package. 

## Goals

- A command line application that accepts user input - prompts for team members and their information.  

- Generates a HTML file that displays a formatted team roster based on this input.
- Each card must have an email address link that opens to the user's chosen email package.
- GitHub name must open their profile in a new tab.

- Application begins - first asks about Team Manager.
- - Prompts: Name, Employee ID, Email Address, Office Number.
- Then option to add Engineer, Intern or Finish Building Team
- - Prompts: Engineer Name, ID, Email,, GitHub Username; Intern: ID, Email, School.
- - BONUS: Add validation to the different response types.

NAME ID EMAIL
- Tests must be written for: 
- - Employee (?)
- - Engineer
- - Intern
- - Manager

## Plan
- Write an inquirer application / series of inquirer prompts for every single piece of information required.
- Create code that changes what inquirer asks based on responses (ie. it asks one set of questions, and then the next set, and then the next set.)

- Create tests for all inquirer functions

- Build a HTML page
- Format the HTML page 

## Future Development
- Something that asks users if they want to change their mind about an answer. 