# ECE 461 CLI Project

<img align="right" width="200" height="200" src="https://raw.githubusercontent.com/cheng452/ECE461/main/axolotl.png">

## Team Members:
1. Erica Cheng
2. William Jorge
3. Hope Post
4. Amanda Bolen

## Project Overview
This project implements a simple command line interface (CLI) using TypeScript and Python. The user can feed a list of URLs of modules and packages hosted on GitHub to the CLI to obtain different descriptive scores about such packages. Some of these metrics are obtained using Google's Scorecard API, and others are calculated based on different factors using metrics obtained directly from the GitHub API.

## User Input
Users are expected to provide a personal GitHub token in order to run `github-api.ts` file called by the Python CLI. Personal GitHub tokens should be stored in the environment folder in the `environment.ts` file. Users can add their GitHub token to this file using the following as skeleton code:
```
export const environment = {
    GITHUB_TOKEN: 'enter personal github token here'
  };
```

## Security and Authentication
It is important to add a GitHub token in the environment folder for authorization purposes. GitHub only allows for a certain amount requests per hour, which can be avoided by authenticating with a personal GitHub token. Make sure to ignore this file when commiting changes to GitHub repo, for security reasons.

## Metric Calculations
### NetScore
The NetScore of a package or module is be determined by averaging all of the following metrics described in this section.
### RampUp
We determine the RampUp time by first determinig the programming language of the package and comparing that to our own defined list of the most common programming languages. Additionally, we will obtain the number of open issues on the GitHub repository of the package, along with the number of forks. The ration between these two values can be normalized to yield a RampUp score in the range [0, 1].
### Correctness
We determine the Correctness metric by first obtaining the number of open issues that the repository of the package or module has, as well as the number of subscribers. The Correctness score is obtained from the normalization of the ratio between these two metrics within the range [0, 1].
### BusFactor
The BusFactor metric is calculted using the ratio between the amount of issues that a repository currently has open compared to the amount of subscribers that are working and updating the code in such repository.
### ResponsiveMaintainer
This metric will come directly from the `Maintenance` score provided by the Scorecard API.
### License
Like the maintenance metric, the License metric will be obtained directly from the Scorecard API. The range of scores for this metric are also in the range [0, 1], however the score will always be either 1 or 0 corresponding to whether or not the package has licensing, respectively.

## Recent Changes to Update on
+ `CLI.py` file finished.
+ `metrics_calc.py` file finished -- returns array of scores [net, etc.] to `CLI.py`

## Current Progress/To-Do List
+ Update readme to support changes in npmjs versus github.
+ Complete Milestone documents and deliverables with correct formatting.
+ Handoff documentation.
+ Code comment updates.
