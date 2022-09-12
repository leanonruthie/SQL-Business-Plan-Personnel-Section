INSERT INTO departments (department_name)
VALUES ("Backend Engineering"),
    ("Customer Service"),
    ("Data Science"),
    ("DevOps Engineering"),
    ("Human Resources"),
    ("Legal"),
    ("Marketing"),
    ("Sales"),
    ("User Experience");

INSERT INTO positions (position_name, salary, department_id)
VALUES ("Backend Senior Engineer", 150000.00, 1),
    ("Service Representative", 50000.00, 2),
    ("Data Scientist", 95000.00, 3),
    ("DevOps Senior Engineer", 100000.00, 4),
    ("Hiring Manager", 70000.00, 5),
    ("Senior Associate", 90000.00, 6),
    ("Marketing Manager", 85000.00, 7),
    ("Sales Representative", 75000.00, 8),
    ("UX Designer", 80000.00, 9);

INSERT INTO employees (first_name, last_name, manager, position_id)
VALUES ("Keanu","Reeves", "manager", 1),
    ("Stephanie","Courtney", "manager", 2),
    ("Elon","Musk", "manager", 3),
    ("Dave","Chappelle", "manager", 4),
    ("Bethenny","Frankel", "manager", 5),
    ("Jermaine","Cole", "manager", 6),
    ("Oprah","Winfrey", "manager", 7),
    ("Ruth","Kim", "manager", 8),
    ("Doja","Cat", "manager", 9);
