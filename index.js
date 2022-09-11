// Work Reference - OOP-Team-Roster Assignment for Week 10

const inquirer = require('inquirer');
const fs = require('fs');

// Choose one of many options
function promptOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please select ONE:',
            choices: ['View All Departments', 'View All Employees', 'View all Positions', 'Add a Department', 'Add an Employee', 'Add a Position', 'Update Position', 'Exit']
        }
    ])
        .then((answers) => {
            if (answers.choice == "View All Departments") {
                promptDepts();
            } else if (answers.choice == "View All Employees") {
                promptEmpls();
            } else if (answers.choice == "View all Positions") {
                promptPositions();
            } else if (answers.choice == "Add a Department") {
                promptAddDept();
            } else if (answers.choice == "Add an Employee") {
                promptAddEmpl();
            } else if (answers.choice == "Add a Position") {
                promptAddPosition();
            } else if (answers.choice == "Update Position") {
                promptUpdate();
            }
            else {
                // MUST COMPLETE THIS SECTION
            }
        });
}

// 1. View All Departments
function promptDepts() {
    // MUST RENDER DEPARTMENT TABLE
    promptOptions()
}

// 2. View All Employees
function promptEmpls() {
    // MUST RENDER EMPLOYEE TABLE
    promptOptions()
}

// 3. View all Positions
function promptPositions() {
    // MUST RENDER POSITION TABLE
    promptOptions()
}

// 4. Add a Department
function promptAddDept() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the name of your new department?'
        },
    ])
        .then((answers) => {
            // MUST UPDATE DEPARTMENT DATABASE
            promptOptions();
        });
}

// 5. Add an Employee
function promptAddEmpl() {
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
            name: 'position',
            message: 'What will be his/her/their new position?',
            choices: []
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Who is his/her/their manager?',
            choices: []
        },
    ])
        .then((answers) => {
            // MUST MODIFY THIS SECTION
            promptOptions();
        });
}

// 6. Add a Position
function promptAddPosition() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'newPosition',
            message: 'What is the name of the new position?'
        },
        {
            type: 'input',
            name: 'newPositionSalary',
            message: 'What is salary of the new position?'
        },
        {
            type: 'list',
            name: 'newPositionDept',
            message: 'Which department will the new position be in?',
            confirm: []
        },
    ])
        .then((answers) => {
            // MUST MODIFY THIS SECTION
            promptOptions();
        });
}

// 7. Update Info
function promptUpdate() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'emplUpdated',
            message: 'Whose information would you like to update?',
            choices: []
        },
        {
            type: 'list',
            name: 'updatePosition',
            message: 'Which new position will the employee fulfill?',
            confirm: []
        },
    ])
        .then((answers) => {
            // MUST MODIFY THIS SECTION
            promptOptions();
        });
}