SELECT cohorts.name, COUNT(Students.name) AS total_students
FROM Students
JOIN cohorts ON cohorts.id=cohort_id
GROUP BY cohorts.name
HAVING COUNT(Students.name) >= 18
ORDER BY total_students;