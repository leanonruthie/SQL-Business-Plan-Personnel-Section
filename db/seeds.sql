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
VALUES ("Keanu", "Reeves", 1, 1),
    ("Dave", "Chappelle", 2, 2),
    ("Bethenny", "Frankel", 3, 3),
    ("Jermaine", "Cole", 4, 4),
    ("Doja", "Cat", 5, 5),
    ("Bill", "Gates", 6, NULL),
    ("Michael", "Jordan", 7, NULL),
    ("Gayle", "King", 8, NULL),
    ("Sade", "Adu", 9, NULL),
    ("Jidenna","Mobisson", 10, NULL);
