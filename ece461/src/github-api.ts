import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

async function getRepository(username: string, repoName: string, token: string): Promise<any> {
  try {
    const response = await axios.get(`${API_BASE_URL}/repos/${username}/${repoName}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default { getRepository };