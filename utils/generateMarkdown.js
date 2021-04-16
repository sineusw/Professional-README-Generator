// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
    mit : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
    mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", 
    gnu: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  return licenseBadges[license.toLowerCase()] || "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
const licenseLinks = {
  apache: "https://www.apache.org/licenses/LICENSE-2.0", 
  mit: "https://choosealicense.com/licenses/mit/", 
  gnu: "https://choosealicense.com/licenses/gpl-3.0/", 
  mozilla: "https://www.mozilla.org/en-US/MPL/"
}
return licenseLinks[license.toLowerCase()]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Distributed under the [${license}](${renderLicenseLink(license)}) License.
  `; 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  
# ${data.title}
## Description
${data.description}
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
 \`\`\` md
    ![alt text](assets/images/screenshot.png)
    \`\`\`
## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
${renderLicenseSection(data.license)}
---


## 🏆 Features
If your project has a lot of features, list them here.
## 🏆 How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests

`;
}

module.exports = generateMarkdown;
