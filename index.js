// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    // question: project title (text input)
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?(required)',
    validate: title => {
      if (title) {
        return true;
      } else {
        console.log('Please enter your projects title!');
        return false;
      };
    }
  },
  {
    // question: description (text input)
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your project:(required)',
    validate: description => {
      if (description) {
        return true;
      } else {
        console.log('Please enter a description for your project!');
        return false;
      };
    }
  },
  {
    // question: installation (text input)
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions for your project:',
    default: 'The creator has decided not to include installation instructions'
  },
  {
    // question: usage (text input)
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information for your project:',
    default: 'The creator has decided not to include usage instructions'
  },
  {
    // question: credits (text input)
    type: 'input',
    name: 'credits',
    message: 'Please enter any credits for your project:',
    default: 'The creator has decided not to include credits'
  },
  {
    // question: contributing (text input)
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines for your project:',
    default: 'The creator has decided not to include contribution guidelines'
  },
  {
    // question: tests (text input)
    type: 'input',
    name: 'test',
    message: 'Please enter test information for your project:',
    default: 'The creator has decided not to include test information'
  },
  {
    // question: license (rawlist)
    // TODO get badges for each license
    type: 'rawlist',
    name: 'license',
    message: 'What license is your project under?',
    choices: ['MIT', 'Apache', 'GNU', 'BSD', 'Boost_Software', 'Creative_Commons', 'Eclipse_Public', 'Mozilla', 'The_Unlicense', 'None'],
  },
  {
    // question: github username (text input)
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username for the project?(required)',
    validate: github => {
      if (github) {
        return true;
      } else {
        console.log('Please enter your GitHub Username!');
        return false;
      };
    }
  },
  {
    // question: email address (text input)
    type: 'input',
    name: 'email',
    message: 'What is a good Email to reach you about the project?',
  }
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/README.md`, data, err => {

      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README.md created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  console.log(`
  ===================
  README.md Generator
  ===================
  `);
  // commented code is for testing with mockData
  // return new Promise((resolve, reject) => {
  //   resolve(mockData);
  // });
  return inquirer.prompt(questions);
};

// mockData for testing output
const mockData = {
  title: 'REAMDE.md Generator',
  github: 'Harabushi',
  description:
    'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
  installation:
    'just download, initialize it in npm, and run it',
  usage:
    'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
  credits:
    'harabushi and a few other people',
  contribution:
    'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
  test:
    'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
  license: 'MIT',
  github: 'Harabushi',
  email: 'harabushi@gmail.com'
};

// Function call to initialize app
init()
  .then(readmeData => generateMarkdown(readmeData))
  .then(markdown => writeToFile(markdown))
  .then(writeToFileResponse => console.log(writeToFileResponse))
  .catch(err => console.log(err));