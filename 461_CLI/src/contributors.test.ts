import axios from 'axios';
import {describe, expect, test} from '@jest/globals';
import {getNumContributors} from './contributors'

jest.mock('axios');

describe('getNumContributors', () => {
    it('should return the number of contributors for the repo', async () => {
    const response = {
        data: [
            {id: 1},
            {id: 2},
            {id: 3},
        ],
    };
    (axios.get as jest.Mocked<any>).mockResolvedValue(response);
    const owner = 'owner';
    const repo = 'repo';
    const result = await getNumContributors(owner, repo);
    expect(result).toBe(3);
    }); 
});