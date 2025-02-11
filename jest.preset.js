// eslint-disable-next-line @typescript-eslint/no-var-requires
const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  testEnvironment: 'node',
  /* TODO: Update to latest Jest snapshotFormat
   * By default Nx has kept the older style of Jest Snapshot formats
   * to prevent breaking of any existing tests with snapshots.
   * It's recommend you update to the latest format.
   * You can do this by removing snapshotFormat property
   * and running tests with --update-snapshot flag.
   * More info: https://jestjs.io/docs/upgrading-to-jest29#snapshot-format
   */
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
  /**
   * Jest does not support Prettier v3 for inline snapshots so we need this workaround:
   * https://github.com/jestjs/jest/issues/14305
   */
  prettierPath: require.resolve('prettier-v2-for-jest-inline-snapshots'),
};
