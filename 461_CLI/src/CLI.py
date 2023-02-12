import sys
# import json
import subprocess
from metrics_calc import *

## user input url
input_url = sys.argv[1]

## split url into arguments to pass to typescript for api (respective to url type)
url_elements = input_url.split('/')
# print(url_elements)
if ('github.com' in url_elements):
    owner = url_elements[3]
    repo = url_elements[4]
    args = [owner, repo]
    rest_call(args)
    scorecard_call(args)
    graphql_metrics(args)
    get_maintained("out/cloudinary_npm_scorecard.json")

elif ('www.npmjs.com' in url_elements):
    owner = url_elements[4]
    args = [owner]
    url_out = str(subprocess.run(['node', 'src/npmjs-api.js'] + args, stdout=subprocess.PIPE).stdout)
    url_parts = url_out.split('/')
    owner = url_parts[3]
    repo_withgit = url_parts[4]
    repo_parts = repo_withgit.split('.git')
    repo = repo_parts[0]
    args = [owner, repo]
    scorecard_call(args)

else:
    print('URL entered is invalid. try again.')
    pass

