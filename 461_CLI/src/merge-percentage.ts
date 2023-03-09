import axios from 'axios';
import { environment } from '../environment/environment';


const GITHUB_BASE = 'https://api.github.com';


// Gather arguments (owner, repo) from call to file
const args = process.argv.slice(2)
const fs = require('fs');


axios.defaults.validateStatus = function () {
    return true;
};

// Function gathers all data available from call to GitHub API about a given repo
// Produces JSON output file that is used later in the program.
async function getOwner(owner: string, repo: string): Promise<any> {
   let num_pulls = 0;
   const response1 = await axios.get(`${GITHUB_BASE}/repos/${owner}/${repo}/pulls`, {
       headers: {
       Authorization: `Token ${environment.GITHUB_TOKEN}`,
       },
   });


   try
   {
       // negativity
       num_pulls = response1['data'][0]['number'];
       console.log(num_pulls)


       let num_reviewed_pulls = 0;
       for( let i = num_pulls; i > num_pulls - 500; i--)
       {
            console.log("entered loop\n");
            try {
               const response = await axios.get(`${GITHUB_BASE}/repos/${owner}/${repo}/pulls/${i}`, {
                   headers: {
                   Authorization: `Token ${environment.GITHUB_TOKEN}`,
                   },
               });
               
               console.log(response['data']['merged']);
               console.log(response['data']['requested_reviewers'].length)
               let isMerged = response['data']['merged'];
               let isReviewed = response['data']['requested_reviewers'].length


               if(isMerged && isReviewed)
               {
                   num_reviewed_pulls += 1;
               }


               }
            catch (error)
               {
                   //console.error(error);
                   console.log("test")
                   //throw error;
                   
           }
       }
       return num_reviewed_pulls / 500;
   }    
   catch(error)
   {
       num_pulls = 1;
       // go from 1 to 500 or x amount in row null
   }
  
  
      
}


// Main function obtains information about a repository and creates a JSON output file
async function main() {
   //const owner = await getOwner(args[0], args[1]);
   const owner = await getOwner("cloudinary", "cloudinary_npm");
   //fs.writeFileSync('out/' + args[1] + '_REST.json', JSON.stringify(owner, null, 2));
 }
  main();