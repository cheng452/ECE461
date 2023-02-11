import axios from 'axios';
import { environment } from '../environment/environment';

const API_URI = 'https://api.github.com/graphql';
const args = process.argv.slice(2)
const fs = require('fs');

//size, lang = ramp up
//watchers versus # of forks = 
//open issues
//popularity 

const GET_REPOSITORY = `
  query($repoName: String!, $owner: String!) {
    repository(name: $repoName, owner: $owner) {
      size
    }
  }
`;

interface Repository {
  name: string;
  url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface ResponseData {
  data: {
    repository: Repository;
  };
}

async function getRepository(
    repoName: string,
    owner: string
  ): Promise<Repository> {
    try {
      const response = await axios.post<ResponseData>(API_URI, {
        query: GET_REPOSITORY,
        variables: {
          repoName,
          owner,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${environment.GITHUB_BASIC_TOKEN}`,
        },
      });
  
      return response.data.data.repository;
    } catch (error) {
      console.error(error);
      throw error;
    }
}

async function main() {
  const repository = await getRepository(args[1], args[0]);
  console.log(repository);
}

main();