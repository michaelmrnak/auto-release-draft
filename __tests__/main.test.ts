import * as core from '@actions/core'
import {run} from '../src/main'

jest.mock('@actions/core')

describe('#run()', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<
    typeof core.setOutput
  >

  test('should set the release-url output aparm', async () => {
    await run()

    expect(fakeSetOutput).toHaveBeenLastCalledWith(
      'release-url',
      expect.anything()
    )
  })
})
