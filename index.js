// Work Reference #1 - a reminder to create proper inquirer prompts using my own homework assignment - OOP-Team-Roster Assignment - for Week 10

const fs = require('fs');
const inquirer = require('inquirer');
// provided from tutoring
const { devNull } = require('os');
// Work reference #2 -RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/12-Stu_Connect-Node - See db.js for below const
const db = require('./db/db');

// From tutoring, below "data" returns id, first_name, last_name, position_id, manager_id from employees table dynamically

let myEmpls = db.query("SELECT * FROM employees", function (err, data) {
    if (err) throw err;
    // console.log(data)
    myEmpls = data
  });

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
        var sql = "SELECT * FROM departments";
        db.query(sql, function (err, data) {
          if (err) throw err;
          console.log("\n");
          console.table(data);
        });
        promptOptions()
      };
     

// 2. View All Employees
function promptEmpls() {
    var sql = "SELECT employees.id AS id, employees.first_name AS first_name, employees.last_name AS last_name, positions.position_name AS position_name, departments.department_name AS department_name,employees.manager_id AS manager_id, positions.salary AS salary FROM departments INNER JOIN positions ON positions.department_id = departments.id INNER JOIN employees ON employees.position_id = positions.id;";
        db.query(sql, function (err, data) {
          if (err) throw err;
          console.log("\n");
          console.table(data);
        });
        promptOptions()
      };

// 3. View all Positions
function promptPositions() {
    var sql = "SELECT positions.id AS id, positions.position_name AS position_name, positions.salary AS salary, departments.department_name AS department_name FROM positions JOIN departments ON positions.department_id = departments.id;";
        db.query(sql, function (err, data) {
          if (err) throw err;
          console.log("\n");
          console.table(data);
        });
        promptOptions()
      };

// 4. BONUS: View all Employees by Department


// 5. BONUS: View all Employees by Manager


// 6.  BONUS: View Sum of Salaries by Department

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
        // Got Help from Tutoring
        db.query("INSERT INTO departments(department_name) VALUES (?)" , answers.deptName, function (err, data) {
            if (err) throw err;
            console.log("row added!");
            promptDepts()
        });
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
            // TBD
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
            // TBD
        });
}

// 10. Update Employee Position
function promptEmplUpdate() {
// Got help from tutoring myEmpls est. in the beginning   
// .map to grab only first_name + last_name 
var fullNewEmplName = myEmpls.map(element => {
    return `${element.first_name} ${element.last_name}`
})
var fullNewEmplPosition = myEmpls.map(element => {
    return `${element.position_id}`
})
console.log(fullEmplName)
    return inquirer.prompt([
        {
            type: 'list',
            name: 'emplUpdated',
            message: 'Whose information would you like to update?',
            choices: fullNewEmplName
        },
        {
            type: 'list',
            name: 'updatePosition',
            message: 'Which new position will the employee fulfill?',
            choices: fullNewEmplPosition
        },
    ])
        .then((answers) => {
            // TBD
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
            // TBD
        });
}

// 12. BONUS: Delete a Department


// 13. BONUS: Delete an Employee


// 14. BONUS: Delete a Position
