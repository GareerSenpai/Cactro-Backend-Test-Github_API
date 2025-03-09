import { Octokit } from "octokit";
import "dotenv/config";

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});

export default octokit;
