const  inquirer  = require("inquirer");

// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{type:"input",
                    message:'What is the the title of your project?',
                    name:'title'
                   } ,  
                    {
                    type:"input",
                    message:'what is your project discription?',
                    name:"discription"
                   },
                    {
                    type:"input",
                    message: 'Does your application attain a license?',
                    name:'license',
                    choices:['']
                    
                   },
                   {
                    type:"input",
                    message:'What is your github username?',
                    name:"github username"
                   }, 
                   {
                   
                   type:"input",
                   message:'What is your email adress?',
                   name: "email adress"
                   }
                   ];

// TODO: Create a function to write README file
function writeToFile(file, data) {
    fs.writeToFile('README.md',response,(err)=> {}
    
    
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data)
    })
}

// Function call to initialize app
init();
