# ECE 461 CLI Project

<img align="right" width="200" height="200" src="https://raw.githubusercontent.com/cheng452/ECE461/main/axolotl.png">

## Team Members:
1. Erica Cheng
2. William Jorge
3. Hope Post
4. Amanda Bolen

## Project Overview
This project implements a simple command line interface (CLI) using TypeScript and Python. The user can feed a list of URLs of modules and packages hosted on GitHub to the CLI to obtain different descriptive scores about the packages. Some of these metrics are obtained using Google's Scorecard API, and others are calculated based on different factors using metrics obtained directly from the GitHub API. URLs can be links to GitHub as well as npmjs.org, however all calculations will be performed using data acquired from the GitHub repositories of these packages.
## User Input
Users are expected to provide a personal GitHub token in order to run the program and obtain data from the different APIs. Personal GitHub tokens should be stored as environment variables so they can be used at runtime, as well as to keep them secret and private.

## Security and Authentication
It is important to add a GitHub token in the environment folder for authorization purposes. GitHub only allows for a certain amount requests per hour, which can be avoided by authenticating with a personal GitHub token. Make sure to ignore this file when commiting changes to GitHub repo, for security reasons.

## Metric Calculations
### NetScore
The NetScore of a package or module is be determined by averaging all of the following metrics described below.
### RampUp
We determine the RampUp time by obtaining the number of open issues on the GitHub repository of the package, along with the number of forks. The ratio between these two values can suggest how quickly issues may be resolved. The determined score will be normalized with respect to 1.
### Correctness
We determine the Correctness metric by first obtaining the number of open issues that the repository of the package or module has, as well as the number of subscribers. The Correctness score is obtained from the normalization of the ratio between these two metrics within the range [0, 1]. 
### BusFactor
The BusFactor metric is calculated using the ratio between the amount of contributors that a repository  has and the "sweet spot" for a team of software engineers, determined to be 7 (as detailed by Google). This value will be normalized to 1.
### ResponsiveMaintainer
This metric will come directly from the `Maintenance` score provided by the Scorecard API. This score will be normalized to 1. 
### License
Like the maintenance metric, the License metric will be obtained directly from the Scorecard API. The range of scores for this metric are also in the range [0, 1], however the score will always be either 1 or 0 corresponding to whether or not the package has licensing, respectively.

## Recent Changes to Update on
+ All files up to date.
+ Code coverage at 80% for `test_suite.py`. 

## Current Progress/To-Do List
+ Complete code handoff. 
