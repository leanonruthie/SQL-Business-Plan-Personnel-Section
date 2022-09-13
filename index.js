// Work Reference #1 - a reminder to create proper inquirer prompts using my own homework assignment - OOP-Team-Roster Assignment - for Week 10

const mysql = require('mysql2'); 
const inquirer = require('inquirer');
// const db = require('./db/connection.js')

// Work Reference #2 - Place this section in connection.js THEN connection.js in .gitignore later if I don't want my root password to show (my root password was changed to a generic one and I'm all right with it showing in public for now)
const db = mysql.createConnection(
    {
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'MyNew#1PW!',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  
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
                promptPositions();
            } else if (answers.choice == "View All Employees by Their Manager") {
                promptPositions();
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
    // Query database - const db found in connection.js to hide password
    db.query('SELECT * FROM departments', function (err, results) {
        console.table(results);
    });
    promptOptions()
}

// 2. View All Employees
function promptEmpls() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
    });
    promptOptions()
}

// 3. View all Positions
function promptPositions() {
    db.query('SELECT * FROM positions', function (err, results) {
        console.table(results);
    });
    promptOptions()
}

// 4. View all Employees by Department
function promptPositions() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
    });
    promptOptions()
}

// 5. View all Employees by Manager
function promptPositions() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
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
            // MUST UPDATE DEPARTMENT DATABASE
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
            // MUST MODIFY THIS SECTION
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
            // MUST MODIFY THIS SECTION
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
            // MUST MODIFY THIS SECTION
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
            // MUST MODIFY THIS SECTION
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
            // MUST MODIFY THIS SECTION
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
            // MUST MODIFY THIS SECTION
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
            // MUST MODIFY THIS SECTION
            promptOptions();
        });
}

// 14. Exit or restart is already in else statement in initial prompt
