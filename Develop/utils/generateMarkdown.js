// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''; // Si no hay licencia, devuelve una cadena vacía
  }
  // Devuelve la insignia de la licencia
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''; // Devuelve una cadena vacía si no hay licencia
  }

  // Devuelve el enlace de la licencia
  return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // No añade nada si no hay licencia
  }

  // Devuelve una sección de texto con la licencia y su enlace
  return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
\`\`\`bash
${data.installation}
\`\`\`
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
## Questions
If you have any questions, please contact me at ${data.email}. You can also find me on Github as ${data.username}.
`;
}

export default generateMarkdown;
