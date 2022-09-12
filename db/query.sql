SELECT positions.id AS id,
positions.position_name AS position_name,
positions.salary AS salary
departments.department_name AS department_name
FROM positions
JOIN departments ON positions.department_id = departments.id;

SELECT employees.id AS id,
employees.first_name AS first_name,
employees.last_name AS last_name,
employees.manager AS manager,
positions.position_name AS position_name
FROM employees
JOIN positions ON employees.position_id = positions.id; 
