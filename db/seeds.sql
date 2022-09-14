INSERT INTO departments (department_name)
VALUES ("Backend Engineering"),
    ("DevOps Engineering"),
    ("Human Resources"),
    ("Legal"),
    ("User Experience");

INSERT INTO positions (position_name, salary, department_id)
VALUES ("Backend Senior Engineer", 150000.00, 1),
    ("DevOps Senior Engineer", 100000.00, 2),
    ("HR Specialist", 70000.00, 3),
    ("Junior Associate", 90000.00, 4),
    ("UX Designer", 80000.00, 5),
    ("Backend Engineering Manager", 200000.00, 1),
    ("DevOps Engineering Manager" , 175000.00,2),
    ("HR Manager", 100000, 3),
    ("Legal Operations Director", 175000, 4),
    ("UX Manager", 1250000.00, 5);

INSERT INTO employees (first_name, last_name, position_id, manager_id)
VALUES ("Keanu", "Reeves", 1, NULL),
    ("Dave", "Chappelle", 2, 1),
    ("Bethenny", "Frankel", 3, 2),
    ("Jermaine", "Cole", 4, 3),
    ("Doja", "Cat", 5, 3),
    ("Bill", "Gates", 6, 3),
    ("Michael", "Jordan", 7, NULL),
    ("Gayle", "King", 8, NULL),
    ("Sade", "Adu", 9, 4),
    ("Jidenna","Mobisson", 10, NULL);
