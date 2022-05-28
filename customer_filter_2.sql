SELECT 
    *
FROM
    sakila.customer
WHERE
    active = FALSE AND store_id = 2
        AND first_name <> 'KENNETH'
ORDER BY first_name;