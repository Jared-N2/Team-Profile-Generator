const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../library/Engineer');
const Intern = require('../library/Intern');
const Manager = require('../library/Manager');
const Employee = require('../library/Employee');
const generateHTML = require('./page_template');


// create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);
const team = [];
const quesManger = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'role',
    message: 'What is your Role/Title?',
  },
  {
    type: 'input',
    name: 'Id',
    message: 'What is your Id number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'office number',
    message: 'Enter your office number?',
  },
  {
    type: 'list',
    name: 'add another',
    message: 'would you like to add more team members?',
    choices: ['Engineer', 'Intern', 'No more team members']
  },
];


const quesEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is your Role/Title?',
    },
    {
      type: 'input',
      name: 'Id',
      message: 'What is your Id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'list',
      name: 'add another',
      message: 'would you like to add more team members?',
      choices: ['Engineer', 'Intern', 'No more team members']
    },
  ])

    .then((data) => {
      team.push(
        new Engineer(data.name, data.id, data.email, data.github)
      );
      if (data.team === "Engineer") {
        quesEngineer();
      } else if (data.team === "Intern") {
        quesIntern();
      } else {
        let data = generateHTML(team);
        fs.writeFileSync("gen/team.html", data, "utf-8");
      }
    })
}

const quesIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is your Role/Title?',
    },
    {
      type: 'input',
      name: 'Id',
      message: 'What is your Id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did you go to/ currently enrolled in?',
    },
    {
      type: 'list',
      name: 'add another',
      message: 'would you like to add more team members?',
      choices: ['Engineer', 'Intern', 'No more team members']
    },
  ])
    .then((data) => {
      team.push(
        new Intern(data.name, data.id, data.email, data.school)
      );
      if (data.team === "Engineer") {
        quesEngineer();
      } else if (data.team === "Intern") {
        quesIntern();
      } else {
        let data = generateHTML(team);
        fs.writeFileSync("gen/team.html", data, "utf-8");
      }
    })
};


const init = () => {
  inquirer.prompt(quesManger)
    .then((data) => {
      team.push(
        new Manager(data.name, data.id, data.email, data.officenumber)
      );
      if (data.team === 'Engineer') {
        quesEngineer();
      } else if (data.team === 'Intern') {
        quesIntern();
      } else {
        let data = generateHTML(team);
        fs.writeFileSync('gen/team.html', data, 'utf-8')
      }
    })
};

init();
