# code coverage issue in wtr

This repo demonstrates how a HTML test can affect the overall code coverage result.

## How to reproduce the issue

Steps to reproduce the issue is as follows:

1. First, run `npm t` to see the test runner reports 100% code coverage.
2. Then, uncomment `L29` in `web-test-runner.config.mjs` and run `npm t`.
3. Now, you will see the code coverage drops below 100% even though all LOCs are covered and tested in all tests.