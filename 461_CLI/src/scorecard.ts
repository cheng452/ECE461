import axios from 'axios';

const API_BASE_URL = 'https://api.securityscorecards.dev';

interface ScorecardData {
  score: number;
  name: string;
  date: string;
}

async function getScorecardData(owner: string, repo: string): Promise<ScorecardData> {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/github.com/${owner}/${repo}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function main() {
  const data = await getScorecardData('cloudinary', 'cloudinary_npm');
  console.log(data);
}

main();
