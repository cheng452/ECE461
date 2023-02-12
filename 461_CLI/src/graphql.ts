// import axios from 'axios';
import { environment } from '../environment/environment';
// import {request} from "graphql-request";

// const endpoint = 'https://api.github.com/graphql';
const args = process.argv.slice(2)
const fs = require('fs');

// // //size, lang = ramp up
// // //watchers versus # of forks = 
// // //open issues
// // //popularity 

// // // const query = `
// // // query {
// // //   repository(owner: "{owner}", name: "{repo}") {
// // //     contributors(first: 100) {
// // //       totalCount
// // //     }
// // //   }
// // // }
// // // `;

// // // async function getNumContributors(owner: string, repo: string) {
// // //   const result = await axios.post("https://api.github.com/graphql", {
// // //     query: query.replace("{owner}", owner).replace("{repo}", repo),
// // //     headers: {
// // //       Authorization: `Bearer ${environment.GITHUB_BASIC_TOKEN}`
// // //     }
// // //   });

// // //   console.log(result.data.data.repository.contributors.totalCount)
// // //   return result.data.data.repository.contributors.totalCount;
// // // }

// // const query = `
// // query {
// //   repository(owner: "{owner}", name: "{repo}") {
// //     contributors(first: 100) {
// //       nodes {
// //         name
// //         email
// //         contributions
// //       }
// //     }
// //   }
// // }
// // `;

// const query = `
// query {
//   repository(owner: "{owner}", name: "{repo}") {
//     issues(states: OPEN) {
//       totalCount
//     }
//     forks {
//       totalCount
//     }
//     subscribers {
//       totalCount
//     }
//   }
// }
// `;

// interface RepositoryData {
//   issues: {
//     totalCount: number;
//   };
//   forks: {
//     totalCount: number;
//   };
//   subscribers: {
//     totalCount: number;
//   };
// }

// async function getRepositoryData(owner: string, repo: string): Promise<RepositoryData> {
//   const result = await axios.post("https://api.github.com/graphql", {
//     query: query.replace("{owner}", owner).replace("{repo}", repo),
//     headers: {
//       "Authorization": `Bearer ${environment.GITHUB_BASIC_TOKEN}`,
//        "Content-Type": "application/json"
//     }
//   });

//   return result.data.data.repository;
// }

// getRepositoryData('cloudinary', 'cloudinary_npm')

// // const query = `
// //   query {
// //     repository(owner: "owner", name: "repo-name") {
// //       contributors(first: 100) {
// //         nodes {
// //           name
// //           email
// //           contributions
// //         }
// //       }
// //     }
// //   }
// // `;

// // const endpoint = "https://api.github.com/graphql";

// // const headers = {
// //   "Authorization": `Bearer ${environment.GITHUB_BASIC_TOKEN}`,
// //   "Content-Type": "application/json"
// // };

// // const data = {
// //   query: query
// // };

// // axios.post(endpoint, data, { headers: headers })
// //   .then(response => {
// //     const contributors = response.data.data.repository.contributors.nodes;
// //     const busFactor = contributors.reduce((acc, contributor) => {
// //       return acc + (contributor.contributions >= 10 ? 1 : 0);
// //     }, 0);
// //     console.log(`The bus factor for this repository is ${busFactor}.`);
// //   })
// //   .catch(error => {
// //     console.error(error);
// //   });

// // async function getNumContributors(owner, repo) {
// //   const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`);
// //   console.log(response.data.length);
// //   return response.data.length;
// // }

// // getNumContributors('cloudinary', 'cloudinary_npm')



import axios from "axios";

interface SubscriberData {
  totalCount: number;
}

interface RepositoryData {
  stargazers: SubscriberData;
}


const query = `
  query {
    repository(owner: "{owner}", name: "{repo}") {
      forkCount
      stargazers {
        totalCount
      }
      issues(first: 100, states:OPEN) {
        totalCount
      }
    }
  }
`;

const headers = {
  Authorization: `Bearer ${environment.GITHUB_BASIC_TOKEN}`,
};

axios
  .post("https://api.github.com/graphql", { query: query.replace("{owner}", args[0]).replace("{repo}", args[1]),}, { headers })
  .then((result) => {
    // fs.writeFileSync('out/' + args[1] + '_GRAPHQL.json', JSON.stringify(result, null, 2));
    // console.log(result.data);
    const forkies = result.data.data.repository.forkCount;
    // console.log(`Forks: ${forkies}.`);
    const subscribers = result.data.data.repository.stargazers.totalCount;
    // console.log(`Subscribers: ${subscribers}.`);
    const issues_out = result.data.data.repository.issues.totalCount;
    // console.log(`Number of issues: ${issues_out}.`);
    // console.log(forkies + "," + subscribers + "," + issues_out)
    let arr: number[] = [];
    arr.push(forkies);
    arr.push(subscribers);
    arr.push(issues_out);
    console.log(arr)

  })
  .catch((error) => {
    console.error(error);
  });
