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
    mscore = 0

    for i in location:
        for key, value in i.items():
        # Check if the field name is equal to "name"
            if key == "name" and value == "Maintained":
            # If the name is equal, print the value
                # print(i['score'])
                if 'score' in i:
                    mscore = i['score']

    return mscore

def get_license(filename):
    with open(filename) as f:
        data = json.load(f)
    
    location = data['checks']
    
    for i in location:
        for key, value in i.items():
            if key == "name" and value == "License":
                if "score" in i:
                    return 1
                else:
                    return 0

def ramp_calc(issues, forks):
    ramp_score = issues/forks
    return ramp_score

def correctness_calc(issues, subs):
    correctness_score = issues/subs
    return correctness_score

def bus_factor_calc(args):
    contributors = subprocess.run(['node', 'src/contributors.js'] + args, stdout=subprocess.PIPE).stdout
    contributors = contributors.decode().strip()
    contributors = int(contributors)
    bus_factor_score = contributors / 7 ##7 is chosen based on "magic number" for SWE team size via google
    return bus_factor_score

def get_scores(args):
    rest_call(args)
    scorecard_call(args)
    forks, subs, issues = graphql_metrics(args)
    ramp_score = ramp_calc(issues, forks)
    correctness = correctness_calc(issues, subs)
    bus_factor = bus_factor_calc(args)
    filename = "out/" + args[1] + "_scorecard.json"
    licensed = get_license(filename)
    maintained = get_maintained(filename)

    net_score = ramp_score + correctness + bus_factor + licensed + maintained
    scores = [net_score, ramp_score, correctness, bus_factor, licensed, maintained]
    return scores