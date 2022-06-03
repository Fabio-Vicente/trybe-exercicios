SELECT 
    DATE(rental_date),
    YEAR(rental_date),
    MONTH(rental_date),
    DAY(rental_date),
    HOUR(rental_date),
    MINUTE(rental_date),
    SECOND(rental_date)
FROM
    sakila.rental
WHERE
    rental_id = 10330;