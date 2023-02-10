import axios from 'axios';

const API_BASE_URL = 'https://api.securityscorecards.dev';

interface ScorecardData {
  score: number;
  name: string;
  date: string;
}

async function getScorecardData(id: number): Promise<ScorecardData> {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function main() {
  const data = await getScorecardData(123);
  console.log(data);
}

main();
