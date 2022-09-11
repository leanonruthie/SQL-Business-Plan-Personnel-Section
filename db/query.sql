SELECT position.id AS id,
position.position AS position,
position.salary AS salary,
department.department AS department

FROM position
JOIN department ON position.department = department.id;
