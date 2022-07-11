// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `${data.license}`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    `${data.license}`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    `${data.license}`
  } return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Description:
  ${data.description}
  ====================

  ====================

  Table of Contents:
   - <a href="Installation">[Installation]</a>
   - <a href="License">[License]</a>
   - <a href="Usage">[Usage]</a>
   - <a href="Contributing">[Contributing]</a>
   - <a href="Tests">[Tests]</a>
   - <a href="Questions">[Questions]</a>

  <h2>Installations:</h2>
    <p>${data.installations}</p>

  <h2>${renderLicenseSection(license)}</h2>
    <p>${renderLicenseBadge(licenseBadge)}</br>
    ${renderLicenseLink(licenseLink)}</p>

  <h2>Usage</h2>
    <p>${data.usage}</p>

  <h2>Contributing</h2>
    <p>${data.contributing}</p>
  
  <h2>Tests</h2>
    <p>${data.tests}</p>

  <h2>Questions</h2>
    <p>${data.questions}</p>
`;
}

module.exports = generateMarkdown();
