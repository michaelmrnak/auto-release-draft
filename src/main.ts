import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    // Implementation
    core.setOutput('release-url', 'https://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
