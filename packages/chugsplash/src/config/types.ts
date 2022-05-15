/**
 * Allowable types for variables.
 */
export type ConfigVariable =
  | boolean
  | string
  | number
  | Array<ConfigVariable>
  | {
      [name: string]: ConfigVariable
    }

/**
 * Full config object that can be used to commit a deployment.
 */
export interface ChugSplashConfig {
  options: {
    name: string
    owner: string
  }
  contracts: {
    [name: string]: {
      source: string
      address?: string
      variables?: {
        [name: string]: ConfigVariable
      }
    }
  }
}

/**
 * Config object with added compilation details. Must add compilation details to the config before
 * the config can be published or off-chain tooling won't be able to re-generate the deployment.
 */
export interface CanonicalChugSplashConfig extends ChugSplashConfig {
  sources: Array<{
    language: 'solidity' // TODO: vyper support eventually
    version: string
    input: any[] // TODO: Properly type this
  }>
}