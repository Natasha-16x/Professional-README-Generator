// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Link to the Deployed Site
${data.link}
## Table of Contents
* [Features](#features)
* [Insatllation](#installation)
* [Usage](#usage)
* [License](#License)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Features
${data.features}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributors
${data.contributors}
## Testing
${data.test}
## questions
### If you have any further questions, you can contact me below
* Name - ${data.name}
* Email - ${data.email}
* GitHub - [${data.creator}](https://github.com/${data.creator}/)
`;
}

module.exports = generateMarkdown;
