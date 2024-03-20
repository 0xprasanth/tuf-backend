import mysql from "mysql2";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
// Prasanth@11824TUF
dotenv.config();

// supabase init
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);


/* SUPABASE FETCH DATA */
export async function getSubmissions() {
  const { data: submissions, error } = await supabase
    .from("submissions")
    .select("*");
    return JSON.stringify(submissions || error, null, 2)
}

console.log(await getSubmissions());
/* SUPABASE INSERT ROW */
export async function createSubmissions(username, language, stdin, sourceCode) {
    /* SUPABASE CODE */
    const { data: submissions, error } = await supabase
    .from("submissions")
    .insert([{ username: username, lang: language, stdin: stdin, src_code: sourceCode }])
    .select();
  // console.log(await getSubmissions());
  return submissions
}


export async function getSubmissionById(id){
    const {data: submissions, error} = await supabase
        .from("submissions")
        .select()
        .eq("id", id)
    return JSON.stringify(submissions, null, 2)
    
}

// const one = await getSubmissionById(2)
// console.log(one);




// const pool = mysql
//   .createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASS,
//     database: process.env.MYSQL_DB,
//   })
//   .promise();

// export async function getUsers() {
//   // getting first part from result
//   const [rows] = await pool.query("SELECT * FROM users");
//   return rows;
// }


/* Getting only one row */
// export async function getUser(id) {
//   const [rows] = await pool.query(
//     `
//         SELECT 
//         * 
//         FROM
//         users
//         WHERE id= ?
//         `,
//     [id]
//   );
//   // first obj from array
//   return rows[0];
// }
// export async function createUser(username, lang, stdin, src_code) {
//     /* SUPABASE CODE */
//     const { data, error } = await supabase
//     .from("submissions")
//     .insert([{ some_column: "someValue", other_column: "otherValue" }])
//     .select();


//     //   const result = await pool.query(
// //     `
// //         INSERT INTO users(username, lang, stdin, src_code)
// //         VALUES (?, ?, ?, ?)
// //     `,
// //     [username, lang, stdin, src_code]
// //   );
// //   const newId = result[0].insertId;

// //   return getUser(newId);
// }

// const users = await createSubmissions('db.js', 'python', '', 'print("I am prasanth")');
// console.log(users);
// const users = await createUser('ptech12', 'python', '', 'print("I am prasanth")');
// console.log(users);
// const submit = await getSubmissions();
// console.log(submit);