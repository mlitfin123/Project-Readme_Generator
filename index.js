const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    //ask user for the title of the app 
    {
        type: 'input',
        name: 'title',
        message: 'What is name of this application?',
    },
    // asks for a description of the project 
    {
        type: 'input',
        message: 'Write a description of this application',
        name: 'description',
    },
    // Asks how to install the app
    {
        type: 'input',
        message: 'How does a user install your application?',
        name: 'installation',
    },
   // asks how a user would use the application
    {
        type: 'input',
        message: 'How does a user use your application?',
        name: 'usage',
    },
    // prompts what license they would you  like to use? 
    {
        type: 'input',
        message: 'What license they would you like to use?',
        name: 'license',
    },
    //Asks the user who else contributed to their application 
    {
        type: 'input',
        message: 'Who else contributed to your application?',
        name: 'contributors',
    },
     //Asks the user about any tests done for the project
    {
        type: 'input',
        message: 'Were any tests done for this project?',
        name: 'tests',
        },
    // Asks the user for a method to ask questions
    {
        type: 'input',
        message: 'How would the user report issues or ask questions about this project? Enter your GitHub email',
        name: 'questions',
        },
];

function init() {
inquirer.prompt(questions).then((response)=>{

// this will Create the first line and main header for the repo (that is what the "# " is for) using the users resonse to RepoName
fs.appendFileSync("README.md", ("# " + response.title )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

// adds the discription of the project that the users entered 
fs.appendFileSync("README.md", ( response.description ) + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
//creates a sub header for installation and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Installation:" + '\n' + response.installation )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for App usage and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## How to use the Application:" + '\n' + response.usage)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

// creates a sub header for contributing and adds the info the user entered 
fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for licences and adds the licences the users entered 
fs.appendFileSync("README.md", ("## Licence(s):" + '\n' + response.license)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

// creates a sub header for tests and adds the tests the users entered 
fs.appendFileSync("README.md", ("## Tests:" + '\n' + response.license)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

// creates a sub header for questions and adds the contact info the users entered 
fs.appendFileSync("README.md", ("## Questions, Contact:" + '\n' + response.questions)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

})
}

//runs the function to create the file 
init();