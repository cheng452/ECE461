import axios from 'axios';
import { environment } from '../environment/environment';

const API_BASE_URL = 'https://api.github.com';

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
}

async function getUser(username: string, repo: string): Promise<GitHubUser> {
  try {
    const response = await axios.get(`${API_BASE_URL}/repos/${username}/${repo}`, {
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
  const user = await getUser('cloudinary', 'cloudinary_npm');
  console.log(user);
}

main();
