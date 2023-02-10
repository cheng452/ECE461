import { Command, Flags } from '@oclif/core';
import axios from 'axios';

class Scorecard extends Command {
  static description = 'Get scorecard information for a user';

  static flags = {
    userId: flags.string({
      char: 'u',
      description: 'User ID',
      required: true,
    }),
  };

  async run() {
    const { flags } = this.parse(Scorecard);
    const API_URL = process.env.SCORECARD_API_URL || 'https://api.example.com/scorecard';
    const userId = flags.userId;

    try {
      const response = await axios.get(`${API_URL}/${userId}`);
      this.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
      this.error(error.message);
    }
  }
}

export = Scorecard;