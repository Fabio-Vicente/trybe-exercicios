SELECT 
    CONCAT(first_name, ' ', last_name) AS `NOME do ATOR`
FROM
    sakila.actor
ORDER BY last_name DESC
LIMIT 30;