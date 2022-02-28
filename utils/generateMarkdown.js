// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeLink = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    Boost_Software: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    Creative_Commons: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    Eclipse_Public: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    The_Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    none: ''
  };

  return badgeLink[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    Apache: '[Apache](https://opensource.org/licenses/Apache-2.0)',
    GNU: '[GNU](https://www.gnu.org/licenses/gpl-3.0)',
    BSD: '[BSD](https://opensource.org/licenses/BSD-3-Clause)',
    Boost_Software: '[Boost Software](https://www.boost.org/LICENSE_1_0.txt)',
    Creative_Commons: '[Creative Commons](http://creativecommons.org/publicdomain/zero/1.0/)',
    Eclipse_Public: '[Eclipse Public](https://opensource.org/licenses/EPL-1.0)',
    Mozilla: '[Mozilla](https://opensource.org/licenses/MPL-2.0)',
    The_Unlicense: '[The Unlicense](http://unlicense.org/)',
    none: ''
  };

  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none'){
    return '';
  } else {
  return `
  Licensed under the ${renderLicenseLink(license)} license.
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${renderLicenseBadge(data.license)}<br>
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}<br>

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions about this project please reach out either through GitHub or my email.<br>
  Please include the name of the project in the subject line and any other relevant information in the content.<br>

  [github.com/${data.github}](https://github.com/${data.github})<br>
  [${data.email}](mailto:${data.email})
  
  ### Credits

  ${data.credits}
`;
}

module.exports = generateMarkdown;