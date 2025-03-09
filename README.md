# GitHub API Integration

## Project Overview

This project is a simple API that connects to the GitHub API to show your GitHub activity log and manage repository issues. It’s designed to be integrated with your portfolio website and provides routes to fetch your GitHub data and interact with your repositories.

## Features

- **GET /github**: Fetch and display your GitHub profile data.

- **GET /github/{repo-name}**: Get details about a specific repository.

- **POST /github/{repo-name}/issues**: Create a new issue in a specified repository by providing a title and body, and return the GitHub issue URL.

## Technologies Used

- Node.js

- Express.js

- Octokit (GitHub API client)

## Deployment

The API is deployed online using one of the following services:

- Render

## Create Personal Access Token

Go to GitHub → Settings → Developer Settings → Personal Access Token

Or just follow this link: [Generate Access Token](https://github.com/settings/tokens)

## Environment Variables

Create a `.env` file in the root directory and add the following:

```

GITHUB_PERSONAL_ACCESS_TOKEN=your_personal_access_token

OWNER=your_github_username

```

## API Endpoints

### Get GitHub Profile Data

**GET /github**

**Response:**

```json

{

"login":  "GareerSenpai",

"id":  63156416,

"followers":  1,

"following":  1,

"html_url":  "https://github.com/your-username",

"repos_url":  "https://api.github.com/users/your-username/repos",

...
...
...

}

```

### Get Repository Details

**GET /github/{repo-name}**

**Response:**

```json
{
  "name": "repo-name",

  "description": "Repository description",

  "html_url": "https://github.com/your-username/repo-name",

  "forks": 10,

  "open_issues": 5
}
```

### Create a New Issue

**POST /github/{repo-name}/issues**

**Request Body:**

```json
{
  "title": "Issue title",

  "body": "Detailed description of the issue."
}
```

**Response:**

```json
{
  "issue_url": "https://github.com/your-username/repo-name/issues/1"
}
```

## How to Run the Project Locally

1. Clone the repository:

```bash

git  clone  https://github.com/your-username/your-repo.git

```

2. Navigate to the project directory:

```bash

cd  your-repo

```

3. Install dependencies:

```bash

npm  install

```

4. Create a `.env` file and add your GitHub credentials (as mentioned above) or check the `.env.example` file.

5. Start the server:

```bash

npm  start

```

6. Access the API at:

- `http://localhost:3000/github`

- `http://localhost:3000/github/{repo-name}`

- `http://localhost:3000/github/{repo-name}/issues`

## Deployment

For deployment, ensure the `.env` variables are configured correctly in your chosen hosting service. Push your code to the deployment platform, and the API will be live at the assigned URL.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Happy coding! 🚀
