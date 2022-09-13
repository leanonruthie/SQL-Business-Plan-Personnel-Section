DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

CREATE TABLE positions (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  position_name VARCHAR(100),
  salary DECIMAL (19,2),
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  FOREIGN KEY (manager_id)
  REFERENCES employees(id),
  position_id INT,
  FOREIGN KEY (position_id)
  REFERENCES positions(id)
);
