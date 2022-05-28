SELECT 
    *
FROM
    sakila.film
WHERE
    rating = 'NC-17'
ORDER BY rental_rate , title
LIMIT 50;