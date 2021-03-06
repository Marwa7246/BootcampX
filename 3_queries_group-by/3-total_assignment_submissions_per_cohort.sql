SELECT cohorts.name, COUNT(assignment_submissions.id) AS total_submissions
FROM Students
JOIN cohorts ON cohorts.id=cohort_id
JOIN assignment_submissions ON students.id=student_id
GROUP BY cohorts.name
ORDER BY total_submissions DESC;
