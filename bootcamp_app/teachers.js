const { Pool } = require( 'pg');
const pool = new Pool ({
  user : 'vagrant',
  password : '123',
  host : 'localhost',
  database : 'bootcampx'
});




// pool.query(`
// SELECT DISTINCT teachers.name As teacher, cohorts.name AS cohort
// FROM assistance_requests
// JOIN teachers ON teachers.id=teacher_id
// JOIN students ON students.id=student_id
// JOIN cohorts ON cohorts.id=cohort_id
// WHERE cohorts.name= '${process.argv[2] || "JUL02"}'
// ORDER BY teacher;
// `)
//   .then(res => {
//     res.rows.forEach(user => {
//       console.log(`${user.cohort}: ${user.teacher} `);
//     })
//   })
//   .catch(err => console.error('query error', err.stack));

const text = "SELECT DISTINCT teachers.name As teacher, cohorts.name AS cohort FROM assistance_requests JOIN teachers ON teachers.id=teacher_id JOIN students ON students.id=student_id JOIN cohorts ON cohorts.id=cohort_id WHERE cohorts.name= $1 ORDER BY teacher"

values = [process.argv[2]]

pool.query(text, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher} `);
    })
  })
  .catch(err => console.error('query error', err.stack));
