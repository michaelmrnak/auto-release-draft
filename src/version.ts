import * as semver from 'semver'

export function isSemver(version: string): boolean {
  return semver.valid(version) !== null
}
