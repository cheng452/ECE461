import axios from 'axios';
import { environment } from '../environment/environment';

const API_BASE_URL = 'https://api.github.com';
const args = process.argv.slice(2)
const fs = require('fs');

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
  const user = await getUser(args[0], args[1]);
  // console.log(user);
  fs.writeFileSync('out/' + args[1] + '_REST.json', JSON.stringify(user, null, 2));
  // return user;
}

main();
