SELECT 
    COUNT(DISTINCT (Provider))
FROM
    PiecesProviders.Provides
WHERE
    Piece = 1;