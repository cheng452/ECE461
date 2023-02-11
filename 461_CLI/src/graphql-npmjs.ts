import axios from 'axios';

const query = `
  query {
    package(name: browserify) {
      name
      version
      description
      repository {
        url
      }
      author {
        name
      }
      publisher {
        username
      }
      keywords
      links {
        npm
        repository
        bugs
      }
    }
  }
`;

const options = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const sendGraphQLRequest = async (query: string) => {
    const response = await axios({
        url: 'https://api.npmjs.org/graphql',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            query,
        },
    });

    return response.data.data;
};

sendGraphQLRequest(query).then(result => {
    console.log(result);
});