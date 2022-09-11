INSERT INTO department (department)
VALUES ("Backend Engineering"),
    ("Customer Service"),
    ("Data Science"),
    ("DevOps Engineering"),
    ("Human Resources"),
    ("Legal"),
    ("Marketing"),
    ("Sales"),
    ("User Experience");

-- NOT WORKING
-- INSERT INTO position (first_name, last_name, position, salary, department, manager)
-- VALUES ("Keanu","Reeves", 1, 1, 1, "Manager1"),
--     ("Stephanie","Courtney", 2, 2, 2, "Manager2"),
--     ("Elon","Musk", 3, 3, 3, "Manager3"),
--     ("Dave","Chappelle", 4, 4, 4, "Manager4"),
--     ("Bethenny","Frankel", 5, 5, 5, "Manager5"),
--     ("Jermaine","Cole", 6, 6, 6, "Manager6"),
--     ("Oprah","Winfrey", 7, 7, 7, "Manager7"),
--     ("Kim","Ruth", 8, 8, 8, "Manager8"),
--     ("Doja","Cat", 9, 9, 9, "Manager9");

INSERT INTO position (position, salary, department)
VALUES ("Backend Senior Engineer", 150000.00, 1),
    ("Service Representative", 50000.00, 2),
    ("Data Scientist", 95000.00, 3),
    ("DevOps Senior Engineer", 100000.00, 4),
    ("Hiring Manager", 70000.00, 5),
    ("Senior Associate", 90000.00, 6),
    ("Marketing Manager", 85000.00, 7),
    ("Sales Representative", 75000.00, 8),
    ("UX Designer", 80000.00, 9);
       
