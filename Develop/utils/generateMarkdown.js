// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if (license) {
    licenseBadge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license) {
    licenseLink = `https://opensource.org/licenses/${license}`;
  } else {
    licenseLink = "";
  }
  return licenseLink;}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (license) {
    return `
${licenseBadge}
${licenseLink}
`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License

${license}

## Table of Contents
* [Description](#Description) 
* [Installation Instructions](#Installation-Instructions)
* [Usage Instructions](#Usage-Instructions)
* [Contribution Guide](#contribution-Guide)
* [Tests](#Tests)
* [Questions](#Questions)

## Description
${data.projectDescription}

## Installation
    ${data.installionInstruct}

## Usage
${data.usageInstructions}

## Contribute
${data.contributors}

## Tests
${data.tests}

## Questions
* https://github.com/${data.githubUsername}
* ${data.email}

`;
}

module.exports = generateMarkdown;
