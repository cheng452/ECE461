import axios from 'axios';
import { environment } from '../environment/environment';

const API_URI = 'https://api.github.com/graphql';

const GET_REPOSITORY = `
  query($repoName: String!, $owner: String!) {
    repository(name: $repoName, owner: $owner) {
      name
      url
      description
      createdAt
      updatedAt
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
  const repository = await getRepository('cloudinary_npm', 'cloudinary');
  console.log(repository);
}

main();