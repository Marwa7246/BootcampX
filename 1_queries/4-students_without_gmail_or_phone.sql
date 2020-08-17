SELECT name, id, cohort_id
  FROM students
  WHERE end_date NOT like '%gmail.com' AND phone IS NULL;