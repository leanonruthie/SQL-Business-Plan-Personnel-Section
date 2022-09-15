# SQL-Business-Plan-Personnel-Section

## Work References
* <a href="hhttps://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp">https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp</a>
* Week 10 OOP-Team-Roster Assignment for working prompts(i.e., functioning Inquirer)
* RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/ for testing/working mySQL (i.e., schema.sql, query.sql, query.sql)
* My brilliant study buddies, instructor, TA and tutor for integration

## User Story

```md
AS AN aspiring entrepreneur
I WANT to create a short and succinct table in the personnel section of my business plan that shows the departments and employees I need to run a successful business
SO THAT I can appeal to many investors reading my business plan
```

## Acceptance Criteria

```md
GIVEN a functioning inquirer
WHEN I start the application
THEN I am able to choose from (1) view all departments (2) view all positions (3) view all employees (4) add department (5) add position (6) add employee (7) update to revise any outdated employee information [possibly (8)-(14) BONUS prompts]
WHEN I choose "view all departments" 
THEN I have a table with 2 columns - (1) id (2) department name
WHEN I choose "view all positions"
THEN I have a table with 4 columns -  (1) id (2) position (3) department (4) salary
WHEN I choose "view all employees"
THEN I have a table with 7 columns - (1) id (2) first name (3) last name (4) position (5) department (6) salary (7) manager
WHEN I choose "add department"
THEN I enter the department name and table/database is updated
WHEN I choose to "add position"
THEN I enter its name, salary, and department and table/database is updated
WHEN I choose "add employee"
THEN I enter his/her/their first name, last name, position, and manager and table/database is updated
WHEN I choose to update outdated employee position information
THEN I am prompted to select one of the employee positions and table/database is updated
WHEN I choose any of the BONUS prompts - (1) View employees by Manager (2) View employees by Department (3) Delete Department (4) Delete Position (5) Delete Employee (6) Update Manager Position (7) Sum of Salaries 
THEN I am able to update respective BONUS information and table/database is updated
```
## Screenshots
* query.sql not required but useful and remains in db folder for consistent testing/querying (Below manager_id still under experimentation and to be replaced with CONCAT(first_name,"",last_name) if there's enough time for a pristine table)
 <img src="./Assets/Screen%20Shot%202022-09-14%20at%208.02.44%20PM%20(2).png">
 <img src="./Assets/Screen%20Shot%202022-09-14%20at%208.03.20%20PM%20(2).png">

## Github Repository
<a href="https://github.com/leanonruthie/SQL-Business-Plan-Personnel-Section.git">https://github.com/leanonruthie/SQL-Business-Plan-Personnel-Section.git</a>

## Demo
Please see below video demo of the functioning application:



