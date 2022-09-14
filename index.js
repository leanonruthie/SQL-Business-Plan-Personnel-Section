// Work Reference #1 - a reminder to create proper inquirer prompts using my own homework assignment - OOP-Team-Roster Assignment - for Week 10

const fs = require('fs');
const inquirer = require('inquirer');
// Work reference #2 -RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/12-Stu_Connect-Node - See db.js for below const
const db = require('./db/db');

const myEmpls = [];

// initializing inquirer prompt 
promptOptions()

// Choose one of many options
function promptOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Please select ONE:',
            choices: ['View All Departments', 'View All Employees', 'View all Positions', 'View All Employees by Their Department', 'View All Employees by Their Manager', 'Add a Department', 'Add an Employee', 'Add a Position', 'Update Employee Position', 'Update Manager Position', 'Delete Department', 'Delete an Employee', 'Delete a Position', 'Exit']
        }
    ])
        .then((answers) => {
            if (answers.selection == "View All Departments") {
                promptDepts();
            } else if (answers.selection == "View All Employees") {
                promptEmpls();
            } else if (answers.selection == "View all Positions") {
                promptPositions();
            } else if (answers.selection == "View All Employees by Their Department") {
                promptEmplsDept();
            } else if (answers.selection == "View All Employees by Their Manager") {
                promptEmplsMngr();
            } else if (answers.selection == "View Company Budget") {
                promptBudget();
            } else if (answers.selection == "Add a Department") {
                promptAddDept();
            } else if (answers.selection == "Add an Employee") {
                promptAddEmpl();
            } else if (answers.selection == "Add a Position") {
                promptAddPosition();
            } else if (answers.selection == "Update Employee Position") {
                promptEmplUpdate();
            } else if (answers.selection == "Update Manager Position") {
                promptMngrUpdate();
            } else if (answers.selection == "Delete a Department") {
                promptdltDept();
            } else if (answers.selection == "Delete an Employee") {
                promptdltPosition();
            } else if (answers.selection == "Delete a Position") {
                promptdltEmpl();
            } else {
                promptOptions()
            }
        });
}

// WORK REFERENCE #3: https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp

// 1. View All Departments
function promptDepts() {
    // visually the table rendered is not satisfactory - ask tutor
        var sql = "SELECT * FROM departments";
        db.query(sql, function (err, data) {
          if (err) throw err;
          console.table(data);
        });
        promptOptions()
      };
     

// 2. View All Employees
function promptEmpls() {
    // visually the table rendered is not satisfactory - ask tutor
    var sql = "SELECT employees.id AS id, employees.first_name AS first_name, employees.last_name AS last_name, positions.position_name AS position_name, departments.department_name AS department_name,employees.manager_id AS manager_id, positions.salary AS salary FROM departments INNER JOIN positions ON positions.department_id = departments.id INNER JOIN employees ON employees.position_id = positions.id;";
        db.query(sql, function (err, data) {
          if (err) throw err;
          console.table(data);
        });
        promptOptions()
      };

// 3. View all Positions
function promptPositions() {
    // visually the table rendered is not satisfactory - ask tutor
    var sql = "SELECT positions.id AS id, positions.position_name AS position_name, positions.salary AS salary, departments.department_name AS department_name FROM positions JOIN departments ON positions.department_id = departments.id;";
        db.query(sql, function (err, data) {
          if (err) throw err;
          console.table(data);
        });
        promptOptions()
      };

// 4. View all Employees by Department
function promptEmplsDept() {
    // visually the table rendered is not satisfactory - ask tutor
    db.query('SELECT * FROM employees', function (err, data) {
        if (err) throw err;
        console.table(data);
    });
    promptOptions()
}

// 5. View all Employees by Manager
function promptEmplsMngr() {
    // visually the table rendered is not satisfactory - ask tutor
    db.query('SELECT * FROM employees', function (err, data) {
        if (err) throw err;
        console.table(data);
    });
    promptOptions()
}

// 6.  View Sum of Salaries
function promptBudget() {
    // visually the table rendered is not satisfactory - ask tutor
    db.query('SELECT * FROM departments', function (err, data) {
        if (err) throw err;
        console.table(data);
    });
    promptOptions()
}
// 7. Add a Department
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

// 8. Add an Employee
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

// 9. Add a Position
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

// 10. Update Employee Position
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

// 11. Update Employee Position
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

// 12. Delete a Department
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

// 13. Delete an Employee
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


// 14. Delete a Position
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

