import pip._vendor.requests as requests
import json
import sys

endpoint = "https://api.github.com/repos/{OWNER}/{REPO}"

#de-hardcode owner and repo values
url = endpoint.format(OWNER="cloudinary", REPO="cloudinary_npm")

#argv 1 pyCLI.py "token"
token = sys.argv[1]

headers = {'Authorization': 'Token ' + token}

response = requests.get(url, headers=headers)

if (response.status_code == 200):
    data = response.json()
    print(data)
    print("Name:", data["name"])
    print("Description:", data["description"])
    print("URL:", data["html_url"])
else:
    print("BESTIE IT FAILED! Status code: ", response.status_code)