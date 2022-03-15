//@ts-check
/**
 * Multiple presets
 * https://stackoverflow.com/a/63232078
 * or
 * https://stackoverflow.com/a/52622141
 */
const { defaults: tsjPreset } = require('ts-jest/presets');

const coverageThreshold = {
  /** Remaninig non-100% coverered files */
  global: {
    branches: 0,
    functions: 0,
    lines: 0,
    statements: 0,
  },
};

/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  preset: 'ts-jest',
  transform: tsjPreset.transform,
  testRegex: ['(.*\\.)?(spec|test)s?\\.[jt]sx?$'],
  // I dono't think we need to run the spec multiple times.. the functional test on tests/ maybe.
  // We can change this if we consider it useful to run the spec tests when the code is transpiled to javascript
  testPathIgnorePatterns: ['node_modules'],
  // https://github.com/shelfio/jest-mongodb#1-create-jestconfigjs
  // Quote: "If you have a custom jest.config.js make sure you remove testEnvironment property, otherwise it will conflict with the preset."
  // testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  // Important to use the AfterEnv to have the jest timeout and all the other settings inside that file to be correctly understood
  // See the difference between setupFiles and setupFilesAfterEnv to see the difference.
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // setupFiles: ['<rootDir>/jest.env.setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  // We shouldn't always run collectCoverage, otherwise when we run smalelr test batches locally it is really slow
  // collectCoverage: true,
  coverageThreshold: coverageThreshold,
};

module.exports = config;
