// Work Reference #1 - a reminder to create proper inquirer prompts using my own homework assignment - OOP-Team-Roster Assignment - for Week 10

const fs = require('fs');
const inquirer = require('inquirer');
// Work reference #2 -RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/12-Stu_Connect-Node - See connection.js for below const
const db = require('./db/connection');

const myEmpls = [];

// initializing inquirer prompt 
promptOptions()

// Choose one of many options
function promptOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please select ONE:',
            choices: ['View All Departments', 'View All Employees', 'View all Positions', 'View All Employees by Their Department', 'View All Employees by Their Manager', 'Add a Department', 'Add an Employee', 'Add a Position', 'Update Employee Position', 'Update Manager Position', 'Delete Department', 'Delete an Employee', 'Delete a Position', 'Exit']
        }
    ])
        .then((answers) => {
            if (answers.choice == "View All Departments") {
                promptDepts();
            } else if (answers.choice == "View All Employees") {
                promptEmpls();
            } else if (answers.choice == "View all Positions") {
                promptPositions();
            } else if (answers.choice == "View All Employees by Their Department") {
                promptEmplsDept();
            } else if (answers.choice == "View All Employees by Their Manager") {
                promptEmplsMngr();
            } else if (answers.choice == "Add a Department") {
                promptAddDept();
            } else if (answers.choice == "Add an Employee") {
                promptAddEmpl();
            } else if (answers.choice == "Add a Position") {
                promptAddPosition();
            } else if (answers.choice == "Update Employee Position") {
                promptEmplUpdate();
            } else if (answers.choice == "Update Manager Position") {
                promptMngrUpdate();
            }
            else if (answers.choice == "Delete a Department") {
                promptdltDept();
            }
            else if (answers.choice == "Delete an Employee") {
                promptdltPosition();
            }
            else if (answers.choice == "Delete a Position") {
                promptdltEmpl();
            }
            else {
                promptOptions()
            }
        });
}

// 1. View All Departments
function promptDepts() {
    db.query('SELECT * FROM departments', function (err, data) {
        console.table(data);
    });
    promptOptions()
}

// 2. View All Employees
function promptEmpls() {
    // JUST FOR NOW UNTIL I CAN SOMEHOW CREATE A CONST FOR WORKING QUERY FROM QUERY.SQL;
    db.query('SELECT * FROM departments', function (err, data) {
        console.table(data);
    });
    promptOptions()
}

// 3. View all Positions
function promptPositions() {
    // JUST FOR NOW UNTIL I CAN SOMEHOW CREATE A CONST FOR WORKING QUERY FROM QUERY.SQL;
    db.query('SELECT * FROM departments', function (err, data) {
        console.table(data);
    });
    promptOptions()
}

// 4. View all Employees by Department
function promptEmplsDept() {
    // JUST FOR NOW UNTIL I CAN SOMEHOW CREATE A CONST FOR WORKING QUERY FROM QUERY.SQL;
    db.query('SELECT * FROM departments', function (err, data) {
        console.table(data);
    });
    promptOptions()
}

// 5. View all Employees by Manager
function promptEmplsMngr() {
    // JUST FOR NOW UNTIL I CAN SOMEHOW CREATE A CONST FOR WORKING QUERY FROM QUERY.SQL;
    db.query('SELECT * FROM departments', function (err, data) {
        console.table(data);
    });
    promptOptions()
}

// 6. Add a Department
function promptAddDept() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the name of your new department?'
        },
    ])
        .then((answers) => {
            // MUST UPDATE DEPARTMENT DATABASE (BELOW IS FROM HW AND MUST BE MODIFIED)
            const deptName = new deptName(answers.deptName);
            myEmpls.push(deptName);
            promptOptions();
        });
}

// 7. Add an Employee
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
            // MUST UPDATE DEPARTMENT DATABASE (BELOW IS FROM HW AND MUST BE MODIFIED)
            const deptName = new deptName(answers.deptName);
            myEmpls.push(deptName);
            promptOptions();
        });
}

// 8. Add a Position
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
            choices: []
        },
    ])
        .then((answers) => {
            // MUST UPDATE DEPARTMENT DATABASE (BELOW IS FROM HW AND MUST BE MODIFIED)
            const deptName = new deptName(answers.deptName);
            myEmpls.push(deptName);
            promptOptions();
        });
}

// 9. Update Employee Position
function promptEmplUpdate() {
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
            choices: []
        },
    ])
        .then((answers) => {
            // MUST UPDATE DEPARTMENT DATABASE (BELOW IS FROM HW AND MUST BE MODIFIED)
            const deptName = new deptName(answers.deptName);
            myEmpls.push(deptName);
            promptOptions();
        });
}

// 10. Update Employee Position
function promptMngrUpdate() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'mngrUpdated',
            message: 'Whose information would you like to update?',
            choices: []
        },
        {
            type: 'list',
            name: 'updateMngrPosition',
            message: 'Which new position will the employee fulfill?',
            choices: []
        },
    ])
        .then((answers) => {
            // MUST UPDATE DEPARTMENT DATABASE (BELOW IS FROM HW AND MUST BE MODIFIED)
            const deptName = new deptName(answers.deptName);
            myEmpls.push(deptName);
            promptOptions();
        });
}

// 11. Delete a Department
function promptdltDept() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'dltDept',
            message: 'Which Department would you like to delete?',
            choices: []
        }
    ])
        .then((answers) => {
            // MUST UPDATE DEPARTMENT DATABASE (BELOW IS FROM HW AND MUST BE MODIFIED)
            const deptName = new deptName(answers.deptName);
            myEmpls.push(deptName);
            promptOptions();
        });
}

// 12. Delete an Employee
function promptdltEmpl() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'dltEmpl',
            message: 'Which Employee would you like to delete?',
            choices: []
        }
    ])
        .then((answers) => {
            // MUST UPDATE DEPARTMENT DATABASE (BELOW IS FROM HW AND MUST BE MODIFIED)
            const deptName = new deptName(answers.deptName);
            myEmpls.push(deptName);
            promptOptions();
        });
}


// 13. Delete a Position
function promptdltPosition() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'dltPosition',
            message: 'Which Position would you like to delete?',
            choices: []
        }
    ])
    .then((answers) => {
        // MUST UPDATE DEPARTMENT DATABASE (BELOW IS FROM HW AND MUST BE MODIFIED)
        const deptName = new deptName(answers.deptName);
        myEmpls.push(deptName);
        promptOptions();
    });
}

// 14. Exit or restart is already in else statement in initial prompt
