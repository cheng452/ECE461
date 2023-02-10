import {Args, Command, Flags} from '@oclif/core'
import githubApi from '../github-api';

let token: string = process.env["GITHUB_TOKEN"]!;

const username = 'cloudinary';
const repoName = 'cloudinary_npm';

export default class Talk extends Command {
  static description = 'talk to endpoint'

  static examples = [
    '$ ece461 talk\nTalk to an api',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(Talk)
    githubApi.getRepository(username, repoName, token).then((repo) => {
      console.log(repo);
    });
  }
}
