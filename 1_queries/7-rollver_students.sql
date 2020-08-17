SELECT students.name AS Student_name, cohorts.name AS cohort_name, students.start_date AS students_startDate, cohorts.start_date AS cohort_startDate
  FROM students 
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE students.start_date != cohorts.start_date;
