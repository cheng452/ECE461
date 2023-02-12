import sys
import subprocess
import json
import re

def rest_call(args):
    #produces json outputs for rest api given inputted url
    subprocess.run(['node', 'src/github-api.js'] + args)
    return

def scorecard_call(args):
    subprocess.run(['node', 'src/scorecard.js'] + args, stdout=subprocess.PIPE).stdout
    return

def graphql_metrics(args):
    # metricsArr =[]
    metrics_str = str(subprocess.run(['node', 'src/graphql.js'] + args, stdout=subprocess.PIPE).stdout)
    gql_metrics = metrics_str.split(', ')
    for idx, i in enumerate(gql_metrics):
        gql_metrics[idx] = int(re.sub("[^0-9]", "", i))
    # forks = gql_metrics[0]
    # subs = gql_metrics[1]
    # issues = gql_metrics[2]
    # print(forks)
    # print(subs)
    # print(issues)
    return gql_metrics

def get_maintained(filename):
    with open(filename) as f:
        data = json.load(f)
    
    location = data['checks']
    
    for i in location:
        for key, value in i.items():
        # Check if the field name is equal to "name"
            if key == "name" and value == "Maintained":
            # If the name is equal, print the value
                print(i['score'])

def get_license(filename):
    with open(filename) as f:
        data = json.load(f)
    
    location = data['checks']
    
    for i in location:
        for key, value in i.items():
            if key == "name" and value == "License":
                if "score" in i:
                    return True
                else:
                    return False