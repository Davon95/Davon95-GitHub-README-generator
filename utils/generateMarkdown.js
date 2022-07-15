// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  if (!licenses) {
    return `${data.licenseBadge}`
  } else {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if (!licenses) {
    `${data.licenseLink}`
  } else {
    return '';
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if(!licenses) {
    `Licenses
    - ${renderLicenseBadge(licenses)}
    - ${renderLicenseLink(licenses)}`
  } return '';
}

// // // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  By: ${data.github}

  **Description**
  ${data.confirmDesc}
  ====================

  ====================

  **Table of Contents**
   - [Installation](#installation)
   - [License](#license)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [Tests](#test)
   - [Questions](#questions)

- Installations:
    ${data.installations}

    ${renderLicenseSection(data.licenses)}

- Usage
    ${data.usage}

- Contributing
    ${data.contributing}
  
- Tests
    ${data.tests}

- Questions
    ${data.questions}
`;
}

module.exports = { generateMarkdown };
