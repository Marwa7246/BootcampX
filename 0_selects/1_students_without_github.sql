SELECT id, name, email, cohort_id
  From students
  WHERE github IS NULL
  ORDER BY cohort_id;