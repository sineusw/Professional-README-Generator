// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs'); // file system 
var generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
   { type: 'input',
    name: 'title',
    message: "What's the title?",
    },

    { type: 'input',
    name: 'description',
    message: "What's the description?",
    },

    {
      type: 'rawlist',
      name: 'license',
      message: 'What license',
      choices: ['Apache', 'MIT', 'GNU', 'Mozilla'],
      filter: function (val) {
        return val;
      },
    },


  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    fs.writeFile("Readme.md", markdown, function(err){console.log(err)} )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      // Use user feedback for... whatever!!
        writeToFile('Readme.md', answers)
     
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Type error ", error)
      } else {
        // Something else went wrong
        console.log(error)
      }
    });
}


// Function call to initialize app
init();
