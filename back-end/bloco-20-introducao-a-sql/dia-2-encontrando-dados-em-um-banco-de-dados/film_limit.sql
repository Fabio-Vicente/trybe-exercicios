SELECT 
    title, release_year, length, rating, replacement_cost
FROM
    sakila.film
ORDER BY length DESC , replacement_cost
LIMIT 20;