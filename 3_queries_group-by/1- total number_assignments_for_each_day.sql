SELECT day, COUNT(*) AS total_assignment
FROM assignments
GROUP By day
HAVING COUNT(*)>=10
ORDER BY day;