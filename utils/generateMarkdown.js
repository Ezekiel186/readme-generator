// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
  case "None": return "";
    break;
  case "Apache License 2.0": return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    break;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "None": return "";
      break;
    case "Apache License 2.0": return "(https://opensource.org/licenses/Apache-2.0)";
      break;
  }
}
var today = new Date();
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  switch (license) {
    case "None": return "";
      break;
    case "Apache License 2.0": return `   
    Copyright ${today.getFullYear()} ${name}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description
${data.description}

## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
    
## Installation
${data.installation}
        
## Usage
${data.usage}

## License
${data.license}
${renderLicenseSection(data.license, data.github)}
                    
## How to Contribute
${data.contributing}    

## Tests
${data.tests}

## Credits
- [Github](https://github.com/${data.github})
- [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
