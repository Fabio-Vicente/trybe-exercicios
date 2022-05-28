SELECT 
    title, description, release_year, replacement_cost
FROM
    sakila.film
WHERE
    rating = 'G' AND replacement_cost >= 18
ORDER BY replacement_cost DESC , title;