import { getSubmissions, createSubmissions, getSubmissionById } from "./database.js";
import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.json(['Hello from /'])
})

app.get("/testing", (req, res) => {
  res.json(['Hello from /testing'])
})


app.get("/submission", async (req, res) => {
  // const users = await getUsers()
  /* supabase */
  const submissions = await getSubmissions();
  // console.log(submissions);
  res.send(submissions);
});

app.get("/submission/:id", async (req, res) => {
  const id = req.params.id;
  const submission = await getSubmissionById(id)
  res.send(submission);
});

//post options
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// post req

app.post("/submission/add", async (req, res) => {
  /* SUPABASE code */
  const { username, language, stdin, sourceCode } = req.body;
  const newSubmit = await createSubmissions(
    username,
    language,
    stdin,
    sourceCode
  );

  res.status(201).send(JSON.stringify(newSubmit));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something broke!`);
});

const port = process.env.PORT || 8081

app.listen(port, () => {
  console.log("Server running on port " + port);
});
