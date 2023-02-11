import axios from 'axios';

const args = process.argv.slice(4)
const fs = require('fs');

const sendRestAPIRequest = async (endpoint: string) => {
  const response = await axios.get(`https://registry.npmjs.org/${endpoint}`);

  return response.data;
};

sendRestAPIRequest('browserify').then(result => {
    console.log(result.repository['url']);
  });
  