const { Pool } = require( 'pg');
const pool = new Pool ({
  user : 'vagrant',
  password : '123',
  host : 'localhost',
  database : 'bootcampx'
});



// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// WHERE cohorts.name LIKE '%${process.argv[2]}%'
// LIMIT ${process.argv[3] || 5};
// `)
//   .then(res => {
//     res.rows.forEach(user => {
//       console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//     })
//   })
//   .catch(err => console.error('query error', err.stack));

// //const values = [process.argv[2] , process.argv[3]];

// // const values = ['FEB12', 2]
// // console.log(values)


const text = "SELECT students.id as student_id,students.name as name, cohorts.name as cohort FROM students JOIN cohorts ON cohorts.id = cohort_id WHERE cohorts.name LIKE $1 LIMIT $2 "

const values = [process.argv[2],process.argv[3]]


//const text = 'INSERT INTO students(name, email) VALUES($1, $2) RETURNING *'


pool.query(text, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));


