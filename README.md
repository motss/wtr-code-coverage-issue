# code coverage issue in wtr

This repo demonstrates how a HTML test can affect the overall code coverage result.

## Setup

```sh
# Install dependencies
$ npm i
```

## How to reproduce the issue

Steps to reproduce the issue is as follows:

1. First, run `npm t` to see the test runner reports 100% code coverage.
2. Then, uncomment [L29] in `web-test-runner.config.mjs` and run `npm t`.
3. Now, you will see the code coverage drops below 100% even though all LOCs are covered and tested in all tests.

## Output

**Code coverage with JS tests only**

All codes are covered in JS tests and it shows 100% code coverage.

![code coverage with js tests only](https://user-images.githubusercontent.com/10607759/99150447-98e28580-26cf-11eb-983a-405f0437c34e.png)

**Code coverage with JS and HTML tests**

All codes are covered in JS tests but not in HTML test. This causes the code coverage to drop below 100% even though all lines of code are covered in JS tests.

![code coverage wih js and html tests](https://user-images.githubusercontent.com/10607759/99150449-9e3fd000-26cf-11eb-8dfa-49c0976e00c0.png)



[L29]: https://github.com/motss/wtr-code-coverage-issue/blob/main/web-test-runner.config.mjs#L29