import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import octokit from "./lib/octokit.js";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/github", async (req, res) => {
  try {
    const response = await octokit.request("GET /user", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    const message = `Error fetching GitHub user data\n\n${error.message}`;
    console.error(error);
    res.status(error.status || 500).send(message);
  }
});

app.get("/github/:repoName", async (req, res) => {
  const { repoName } = req.params;
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: process.env.OWNER,
      repo: repoName,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    const message = `Error fetching GitHub repo data for repo: ${repoName}\n\n${error.message}`;
    console.error(error);
    res.status(error.status || 500).send(message);
  }
});

app.post("/github/:repoName/issues", async (req, res) => {
  try {
    const { repoName } = req.params;
    const { title, body } = req.body;

    console.log("Repo:", repoName);
    console.log("Title:", title);
    console.log("Body:", body);

    const response = await octokit.request(
      "POST /repos/{owner}/{repo}/issues",
      {
        owner: process.env.OWNER,
        repo: repoName,
        title,
        body,
      }
    );

    console.log(response.data);
    res.status(200).send(response.data.html_url);
  } catch (error) {
    const message = `Error posting issue on repo: ${repoName}\n\n${error.message}`;
    console.error(error);
    res.status(error.status || 500).send(message);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
