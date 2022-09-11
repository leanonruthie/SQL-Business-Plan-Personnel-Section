DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(30)
);

CREATE TABLE position (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  position VARCHAR(100),
  salary DECIMAL (19,2),
  department INT,
  FOREIGN KEY (department)
  REFERENCES department(id)
  ON DELETE SET NULL
);


-- NOT WORKING
-- CREATE TABLE employee (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30),
--   last_name VARCHAR(30),
--   manager VARCHAR(30),
--   position INT,
--   FOREIGN KEY (position)
--   REFERENCES position(id),
--   department INT,
--   FOREIGN KEY (department)
--   REFERENCES department(id)
--   ON DELETE SET NULL
--   salary INT,
--   FOREIGN KEY (position)
--   REFERENCES position(id)
--   ON DELETE SET NULL
-- );
