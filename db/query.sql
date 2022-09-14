-- This will be departments table for reference
SELECT *
  FROM departments;

-- This will be positions table for reference
SELECT positions.id AS id,
positions.position_name AS position_name,
positions.salary AS salary,
departments.department_name AS department_name
  FROM positions 
  JOIN departments ON positions.department_id = departments.id;

-- This will be employees table for reference
SELECT employees.id AS id,
employees.first_name AS first_name,
employees.last_name AS last_name,
positions.position_name AS position_name,
departments.department_name AS department_name,
employees.manager_id AS manager_id,
positions.salary AS salary
  FROM departments
  INNER JOIN positions
  ON positions.department_id = departments.id
  INNER JOIN employees
  ON employees.position_id = positions.id;