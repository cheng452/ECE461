# ECE 461 CLI Project

## Team Members:
1. Erica Cheng
2. William Jorge
3. Hope Post
4. Amanda Bolen

## Project Overview
This project implements a CLI using TypeScript. In the `github-api.ts` file, in the main function, users can specify a user and repo in the getUser function. 

## User Input
Users are expected to provide a personal GitHub token in order to run `github-api.ts`. Personal GitHub tokens should be stored in the environment folder in the `environment.ts` file. Users can add their GitHub token to this file using the following as skeleton code:
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
### ResponsiveMaintainer
### License

## Recent Changes to Update on
+ Implemented npmjs versions of rest and graphql api, and scorecard (WIP).
+ Created skeleton file for python CLI. 

## Current Progress/To-Do List
+ Update readme to support changes in npmjs versus github.
+ Create executable commands for auto grader.
+ Create output files with scoring metrics.
+ Complete Milestone documents and deliverables with correct formatting.
+ Handoff documentation.
+ Code comment updates.