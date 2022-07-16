// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.licenseBadge) {
    return ''
  } else {
    return `${data.licenseBadge}`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (!data.licenseLink) {
    return '';
  } else {
    return `${data.licenseLink}`;
  }
};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(data) {
  if (!data) {
    return '';
  } else if (data) {
    return `${renderLicenseBadge(data)}
    ${renderLicenseLink(data)}`;
  };
};

// // // TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.projectTitle}
  By: ${data.github}

  **Description**
  ${data.description}
  ====================
  **Table of Contents**
   - [Installation](#Installation)
   - [Licenses](#Licenses)
   - [Usage](#Usage)
   - [Contributing](#Contributing)
   - [Tests](#Tests)
   - [Questions](#Questions/Miscellaneous)
  ====================
- Installations:
    ${data.installations}

- Licenses
    ${renderLicenseSection(data)}

- Usage
    ${data.usage}

- Contributing
    ${data.contribution}
  
- Tests
    ${data.tests}

- Questions/Miscellaneous
    ${data.questions}
`;
}

module.exports = { generateMarkdown };
