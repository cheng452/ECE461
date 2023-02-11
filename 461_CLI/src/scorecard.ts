import axios from 'axios';

const API_BASE_URL = 'https://api.securityscorecards.dev';
const args = process.argv.slice(2)
const fs = require('fs');

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
  const data = await getScorecardData(args[0], args[1]);
  fs.writeFileSync('out/' + args[1] +'_scorecard.json', JSON.stringify(data, null, 2));
  // console.log(data);
}

main();
