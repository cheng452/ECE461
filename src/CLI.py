import sys
import json
import subprocess
from metrics_calc import get_scores

## user input url
url_file = sys.argv[1]

# gathering list of urls from URL input file
urls = []
with open(url_file) as f:
    for line in f:
        urls.append(line.rstrip('\n'))

for url in urls:
    ## split url into arguments to pass to typescript for api (respective to url type)
    url_elements = url.split('/')
    # print(url_elements)

    # implemented when user enters github url
    if ('github.com' in url_elements):
        owner = url_elements[3]
        repo = url_elements[4]
        args = [owner, repo]
        scores = get_scores(args)
        # print(scores)
    
    # implemented when user enters npmjs url
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
        # scorecard_call(args)
        scores= get_scores(args)
        # print(scores)

    else:
        print('URL entered is invalid. Try again.')
        pass

    # Creating dictionary with scoring entries for JSON output
    output = dict()
    output["URL"] = str(url)
    output["NET_SCORE"] = "{:.1f}".format(scores[0])
    output["RAMP_UP_SCORE"] = "{:.1f}".format(scores[1])
    output["CORRECTNESS_SCORE"] = "{:.1f}".format(scores[2])
    output["BUS_FACTOR_SCORE"] = "{:.1f}".format(scores[3])
    output["RESPONSIVE_MAINTAINER_SCORE"] = "{:.1f}".format(scores[4])
    output["LICENSE_SCORE"] = 0 if scores[5] < 1 else 1

    print(json.dumps(output))

