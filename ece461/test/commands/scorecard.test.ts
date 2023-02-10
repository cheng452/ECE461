import {expect, test} from '@oclif/test'

describe('scorecard', () => {
  test
  .stdout()
  .command(['scorecard'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['scorecard', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
