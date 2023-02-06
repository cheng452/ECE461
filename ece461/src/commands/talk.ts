import {Args, Command, Flags} from '@oclif/core'
import githubApi from '../github-api';

const username = 'cloudinary';
const repoName = 'cloudinary_npm';

export default class Talk extends Command {
  static description = 'talk to endpoint'

  static examples = [
    '$ ece461 talk\nTalk to an api',
  ]

  static args = {
    token: Args.string({description: 'Token for github', required: true})
  }
  public async run(): Promise<void> {
    const {args} = await this.parse(Talk)
    githubApi.getRepository(username, repoName, args.token).then((repo) => {
      console.log(repo);
    });
  }
}
