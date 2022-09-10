// Work Reference - OOP-Team-Roster Assignment for Week 10

const inquirer = require('inquirer');
const fs = require('fs');

// 1. View All Departments
// 2. View All Employees
// 3. View all Roles
// 4. Add a Department
// 5. Add an Employee
// 6. Add a Role
// 7. Update Info
// 8. Exit

function promptOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please select ONE:',
            choices: ['View All Departments', 'View All Employees', 'View all Roles', 'Add a Department', 'Add an Employee', 'Add a Role',
                'Update Info', 'Exit']
        }
    ])
        .then((answers) => {
            if (answers.choice == "View All Departments") {
                promptDepts();
            } else if (answers.choice == "View All Employees") {
                promptEmpls();
            } else if (answers.choice == "View all Roles") {
                promptRoles();
            } else if (answers.choice == "Add a Department") {
                promptAddDept();
            } else if (answers.choice == "Add an Employee") {
                promptAddEmpl();
            } else if (answers.choice == "Add a Role") {
                promptAddRole();
            } else {
                // MUST MODIFY THIS SECTION
                const htmlPageContent = generateMarkdown(employees);
                fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created dist/index.html!')
                );
            };
        });
}

function promptDepts() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the name of your new department?'
        },
    ])
        .then((answers) => {
            // MUST MODIFY THIS SECTION
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            promptOptions();
        });
}

function promptEmpls() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'emplFirst',
            message: 'What is the first name of the new employee?'
        },
        {
            type: 'input',
            name: 'emplLast',
            message: 'What is the last name of the new employee?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What will be his/her/their new role?',
            choices:

        },
        {
            type: 'list',
            name: 'manager',
            message: 'What will be his/her/their new role?',
            choices:
        },
    ])
        .then((answers) => {
            // MUST MODIFY THIS SECTION
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            promptOptions();
        });
}
;

promptRoles();

promptAddDept();

promptAddEmpl();

promptAddRole();

promptOptions();