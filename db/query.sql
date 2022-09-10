-- Work Reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/28-Stu_Mini-Project
SELECT movies.movie_name AS movie, reviews.review
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
