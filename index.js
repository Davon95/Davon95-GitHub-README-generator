// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const userInputs = () => {
    return inquirer.prompt([
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
            name: 'description',
            message: 'Enter description of your project.(Required)',
            validate:  description => {
                if (description) {
                    return true;
                } else {
                    console.log('Enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installations',
            message: 'Add any installations from your project.'
        },
        {
            type: 'input',
            name: 'licenseBadge',
            message: 'Add a license(s) badge.'
        },
        {
            type: 'input',
            name: 'licenseLink',
            message: 'Add a link to the license(s).'
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
        {
            type: 'input',
            name: 'contribution',
            message: 'Add a list of those contributed in this project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide a test if needed.(Optional)(Type N/A for blank)'
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileName, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Updated'
            });
        });
    });
    // return writeToFile(fileName, data);
};
    
// TODO: Create a function to initialize app
const init = function () {
    userInputs()
        .then(generateMarkdown)
        .then(writeToFile);
    console.log();
};
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