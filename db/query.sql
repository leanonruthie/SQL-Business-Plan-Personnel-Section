
-- working
SELECT position.id AS id,
position.position AS position,
position.salary AS salary,
department.department AS department

FROM position
JOIN department ON position.department = department.id;

-- not working
-- SELECT employee.id AS id,
-- employee.first_name AS first_name,
-- employee.last_name AS last_name,
-- employee.manager AS manager
-- FROM (employee JOIN position ON employee.id=position.id)
-- JOIN department ON position.department = department.id;

