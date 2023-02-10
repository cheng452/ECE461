import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
}

async function getUser(username: string): Promise<GitHubUser> {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `Token ${process.env.GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


async function main() {
  const user = await getUser('octocat');
  console.log(user);
}

main();
