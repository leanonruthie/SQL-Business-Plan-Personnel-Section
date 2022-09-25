// Work Reference #1: OOP-Team-Roster Assignment for Week 10
// Work reference #2: RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/12-Stu_Connect-Node 
// WORK REFERENCE #3: https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp
// WORK REFERENCE #4: Study Group + Tutoring + Office Hours

// const fs = require('fs');
const inquirer = require('inquirer');
// From tutoring
// const { devNull } = require('os');
const db = require('./db/db');

// initializing inquirer prompt 
promptOptions()

// Choose one of many options
function promptOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Please select ONE:',
            choices: ['View All Departments', 'View All Employees', 'View All Positions', 'Add a Department', 'Add an Employee', 'Add a Position', 'Update Employee Position']
        }
    ])
        .then((answers) => {
            if (answers.selection == "View All Departments") {
                promptDepts();
            } else if (answers.selection == "View All Employees") {
                promptEmpls();
            } else if (answers.selection == "View All Positions") {
                promptPositions();
            } else if (answers.selection == "Add a Department") {
                promptAddDept();
            } else if (answers.selection == "Add an Employee") {
                promptAddEmpl();
            } else if (answers.selection == "Add a Position") {
                promptAddPosition();
            } else if (answers.selection == "Update Employee Position") {
                promptEmplUpdate();
            } else {
                promptOptions()
            }
        });
}

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
    var sql = "SELECT employees.id AS id, employees.first_name AS first_name, employees.last_name AS last_name, positions.position_name AS position_name, departments.department_name AS department_name, employees.manager_id AS manager_id, managers.first_name AS manager_first_name, managers.last_name as manager_last_name, positions.salary AS salary FROM departments INNER JOIN positions ON positions.department_id = departments.id INNER JOIN employees ON employees.position_id = positions.id LEFT JOIN employees AS managers ON employees.manager_id = managers.id;";
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
            db.query("INSERT INTO departments(department_name) VALUES (?)", answers.deptName, function (err, data) {
                if (err) throw err;
                promptDepts(data);
            });
        });
}

// Help from tutoring, below "data" returns id, first_name, last_name, position_id, manager_id from  employees table dynamically for var inside Prompt 5
let myEmpls = db.query("SELECT * FROM employees", function (err, data) {
    if (err) throw err;
    // console.log(data) working but lengthy
    myEmpls = data
});

// Help from tutoring, "data" returns id, position_name, salary, department_id, from  positions table dynamically for var inside Prompt 5
let myPstns = db.query("SELECT * FROM positions", function (err, data) {
    if (err) throw err;
    // console.log(data) working but lengthy
    myPstns = data
});

// 5. Add an Employee 
function promptAddEmpl() {
    // from tutoring - .map to grab position_names only
    var newEmplPositions = myPstns.map(element => {
        return `${element.position_name}`
    });
    // from tutoring .map to grab first_name + last_name only
    var fullEmplName = myEmpls.map(element => {
        return `${element.first_name} ${element.last_name}`
    });
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
            name: 'newEmplPstn',
            message: 'What will be his/her/their position?',
            choices: newEmplPositions
        },
        {
            type: 'list',
            name: 'newEmplMngr',
            message: 'Who is his/her/their manager?',
            choices: fullEmplName
        },
    ])
        // I learned from tutoring this is called callback hell; callback hell was used here instead of a simple and direct prompt asking for the manager_id and position_id because I already dynamically pushed all options in prompts in full out list; doing this assignment the hard way proved that async/await is crucial and sequelize/express saves a lot of time than verbatim commands in sql

        .then((answers) => {
            let managerId = "";
            // to split full name of chosen managers
            db.query("SELECT id from employees WHERE first_name = ? and last_name = ?", [answers.newEmplMngr.split(" ")[0], answers.newEmplMngr.split(" ")[1]], function (err, data) {
                if (err) throw err;
                console.log(data);
                managerId = data[0].id;
                let positionId = "";
                db.query("SELECT id from positions WHERE position_name = ?", [answers.newEmplPstn], function (err2, data2) {
                    if (err2) throw err2;
                    console.log(data2);
                    positionId = data2[0].id;
                    db.query("INSERT INTO employees (first_name, last_name, manager_id, position_id) VALUES (?,?,?,?)", [answers.emplFirst, answers.emplLast, managerId, positionId], function (err3, data3) {
                        if (err3) throw err3;
                        console.log(data3);
                        db.query("SELECT * FROM employees", function (err4, data4) {
                            if (err4) throw err4;
                            console.table(data4)
                        });
                    });
                })
            });
            promptOptions()
        });
};

// Help from tutoring, "data" returns id, department_name from departments table dynamically for var inside Prompt 5

let myDepts = db.query("SELECT * FROM departments", function (err, data) {
    if (err) throw err;
    // console.log(data)
    myDepts = data
});

// 6. add position 
function promptAddPosition() {
    // .map to grab department only
    var deptNewPosition = myDepts.map(element => {
        return `${element.department_name}`
    });
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newPositionDept',
            message: 'Which department will the new position be in?',
            choices: deptNewPosition
        },
        {
            type: 'input',
            name: 'newPosition',
            message: 'What is the name of the new position?'
        },
        {
            type: 'input',
            name: 'newPositionSalary',
            message: 'What is salary of the new position?'
        }
    ])
        .then((answers) => {
            console.log(deptNewPosition);
            let deptId = "";
            db.query("SELECT id FROM departments WHERE department_name = ?", [answers.newPositionDept], function (err, data) {
                if (err) throw err;
                console.log(data);
                deptId = data[0].id;
                db.query("INSERT INTO positions (position_name, salary, department_id) VALUES (?,?,?)", [answers.newPosition, answers.newPositionSalary, deptId], function (err2, data2) {
                    if (err2) throw err2;
                    console.log(data2);
                    db.query("SELECT * FROM positions", function (err3, data3) {
                        if (err3) throw err3;
                        console.table(data3)
                    });
                });
            });
            promptOptions()
        });
}

// 7. update to revise any outdated employee position 
function promptEmplUpdate() {
    // from tutoring - .map to grab position_names only
    var newEmplPositions = myPstns.map(element => {
        return `${element.position_name}`
    });
    // from tutoring .map to grab first_name + last_name only
    var fullEmplName = myEmpls.map(element => {
        return `${element.first_name} ${element.last_name}`
    });
    return inquirer.prompt([
        {
            type: 'list',
            name: 'emplUpdated',
            message: 'Whose information would you like to update?',
            choices: fullEmplName
        },
        {
            type: 'list',
            name: 'updatePosition',
            message: 'Which position does the employee currently fulfill?',
            choices: newEmplPositions
        },
    ])
        .then((answers) => {
            let positionId = "";
            db.query("SELECT id from positions WHERE position_name = ?", [answers.updatePosition], function (err, data) {
                if (err) throw err;
                console.log(data);
                positionId = data[0].id;
                db.query("INSERT INTO employees(first_name, last_name, position_id) VALUES (?,?,?)", [answers.emplFirst, answers.emplLast, positionId], function (err2, data2) {
                    if (err2) throw err2;
                    console.log(data2);
                    db.query("SELECT * FROM employees", function (err, data) {
                        if (err) throw err;
                        console.table(data)
                    });
                });
            });
            promptOptions()
        });
}
