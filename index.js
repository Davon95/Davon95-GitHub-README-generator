// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// const generateMarkdown = require('../utils/generateMarkdown');
// TODO: Create an array of questions for user input
const userInputs = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?(Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter a valid username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'projectTitle',
                message: 'What is your project title?(Required)',
                validate: projectInput => {
                    if (projectInput) {
                        return true;
                    } else {
                        console.log('Enter a valid project title!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmDesc',
                message: 'Do you want to add a description of your project?',
                default: true
            },
            {
                type: 'input',
                name: 'descOfProject',
                message: 'Enter description of your project.',
                when: ({ confirmDesc }) => {
                    if (confirmDesc) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Add any installations from your project.'
            },
            {
                type: 'input',
                name: 'licenses',
                message: 'Add any licenses if any installtions was included.'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Add a breif description on how to use your project.(Required)',
                validation: usageChk => {
                    if (usageChk) {
                        return true;
                    } else {
                        console.log('Please add a  valid description!');
                        return false;
                    }
                }
            },
        ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('/README.md', fileName, data => {
        if (data) {
            console.log('File Updated!');
        } 
    })
    return writeToFile(fileName, data);
};

// TODO: Create a function to initialize app
function init() {
    userInputs 
    writeToFile();
    generateMarkdown();
}

// Function call to initialize app
init();



// Generate a high-quality README.md file with the following contents:
    // Title of project
    // Description of project
    // Table of Contents
    // Installation
    // Usage
    // License
    // Contributing
    // Tests
    // Questions
// Title is displayed of the README file when entering project title
// Various descriptions is under each seperate sections:
    // Description
    // Installation
    // Usage
    // Contributing
    // Tests
// A badge is added alonside a notice in License section that explains which license the application is covered under
// When entering a GitHub username, it is displayed under the Questions section with a link to the user GitHub profile
// When entering an email address, it is displayed under the Questions section with instructions on how to reach user with additional questions
// When clicking on a link in the Table of Content section, it will redirect user to the correstponding section