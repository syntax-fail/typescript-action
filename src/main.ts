import * as core from '@actions/core'
import { wait } from './wait'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Waiting ${ms} milliseconds ...`)

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    const audience = core.getInput('audience', { required: false })

    const id_token1 = await core.getIDToken() // ID Token with default audience
    const id_token2 = await core.getIDToken(audience) // ID token with custom audience

    core.debug(id_token1)
    core.debug(id_token2)
    core.debug(new Date().toTimeString())
    core.debug(new Date().toTimeString())
    core.debug(new Date().toTimeString())
    core.debug(new Date().toTimeString())
    core.debug(new Date().toTimeString())
    core.debug(new Date().toTimeString())

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
