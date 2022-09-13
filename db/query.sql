SELECT employees.id AS id,
employees.first_name AS first_name,
employees.last_name AS last_name,
positions.position_name AS position_name,
positions.salary AS salary,
departments.department_name AS department_name,
employees.manager AS manager
  FROM departments
  INNER JOIN positions
  ON positions.department_id = departments.id
  INNER JOIN employees
  ON employees.position_id = positions.id;