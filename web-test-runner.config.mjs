import { playwrightLauncher } from '@web/test-runner-playwright';

/** @type {import('@web/test-runner').TestRunnerConfig} */
const config = {
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' }),
  ],
  browserStartTimeout: 60e3,
  concurrency: 3,
  concurrentBrowsers: 9,
  coverage: true,
  coverageConfig: {
    report: true,
    threshold: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
    nativeInstrumentation: true,
    exclude: [
      './tests/**/*.test.js',
    ],
  },
  files: [
    // Uncomment this line to see code coverage drops despite all LOCs are tested
    // './tests/iframe.test.js',
    './tests/message.test.js',
  ],
  nodeResolve: true,
  testFramework: {
    config: {
      checkLeaks: true,
      fullTrace: true,
      timeout: 60e3,
      ui: 'bdd',
    }
  },
};

export default config;
