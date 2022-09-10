# 12 SQL: Employee Tracker

## Reminders from Original Readme 
Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

As the image illustrates, your schema should contain the following three tables:

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

### Bonus

Fulfilling any of the following can add up to 20 points to your grade. Note that the highest grade you can achieve is still 100:

* Application allows users to update employee managers (2 points).

* Application allows users to view employees by manager (2 points).

* Application allows users to view employees by department (2 points).

* Application allows users to delete departments, roles, and employees (2 points for each).

* Application allows users to view the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department (8 points).

## Work References
* Week 10 OOP-Team-Roster Assignment for working prompts(i.e., functioning Inquirer)
* RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/28-Stu_Mini-Project for mySQL
* My brilliant study buddies, instructor, TA and tutor 


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
THEN I am able to choose from (1) view all departments (2) view all roles (3) view all employees (4) add department (5) add role (6) add employee (7) update to revise any outdated employee information
WHEN I choose "view all departments" 
THEN I have a table with 2 columns - (1) department names (2) department ids
WHEN I choose "view all roles"
THEN I have a table with 4 columns -  (1) job title (2) role id (3) department (4) salary
WHEN I choose "view all employees"
THEN I have a table with 7 columns - (1) employee id (2) first name (3) last name (4) job title (5) department (6) salary (7) manager
WHEN I choose "add department"
THEN I enter the department name and table/database is updated
WHEN I choose to "add role"
THEN I enter its name, salary, and department and table/database is updated
WHEN I choose "add employee"
THEN I enter his/her/ther’s first name, last name, role, and manager and table/database is updated
WHEN I choose to update outdated employee information
THEN I am prompted to select an employee for any further revision and table/database is updated
```

## Github Repository
<a href="https://github.com/leanonruthie/SQL-Business-Plan-Personnel-Section.git">https://github.com/leanonruthie/SQL-Business-Plan-Personnel-Section.git</a>

## Demo
Please see below video demo of the functioning application:



