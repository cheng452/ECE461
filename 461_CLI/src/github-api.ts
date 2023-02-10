import axios from 'axios';
import { environment } from '../environment/environment';

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
        Authorization: `Token ${environment.GITHUB_TOKEN}`,
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
