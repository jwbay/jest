# Contributing to Jest

Jest is one of Facebook's open source projects that is both under very active development and is also being used to ship code to everybody on [facebook.com](https://www.facebook.com). We're still working out the kinks to make contributing to this project as easy and transparent as possible, but we're not quite there yet. Hopefully this document makes the process for contributing clear and answers some questions that you may have.

## [Code of Conduct](https://code.facebook.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.facebook.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

## Our Development Process

The core team works directly on GitHub and all work is public.

### `master` is unsafe

We will do our best to keep `master` in good shape, with tests passing at all times. But in order to move fast, we will make API changes that your application might not be compatible with. We will do our best to communicate these changes and always version appropriately so you can lock into a specific version if need be.

### Workflow and Pull Requests

The core team will be monitoring for pull requests. When we get one, we'll run some Facebook-specific integration tests on it first. From here, we'll need to get another person to sign off on the changes and then merge the pull request. For API changes we may need to fix internal uses, which could cause some delay. We'll do our best to provide updates and feedback throughout the process.

*Before* submitting a pull request, please make sure the following is done…

1. Fork the repo and create your branch from `master`.

   ```sh
   git clone https://github.com/<your_username>/jest
   cd jest
   git checkout -b my_branch
   ```

2. Jest uses [Yarn](https://code.facebook.com/posts/1840075619545360)
   for running development scripts. If you haven't already done so,
   please [install yarn](https://yarnpkg.com/en/docs/install).

3. Run `yarn install`.

    ```sh
    yarn install
    ```

4. If you've added code that should be tested, add tests. You
   can use watch mode that continuously transforms changed files
   to make your life easier.

   ```sh
   # in the background
   yarn run watch
   ```

5. If you've changed APIs, update the documentation.

6. Ensure the test suite passes via `yarn test`. To run the test suite you
   may need to install Mercurial (`hg`). On macOS, this can be done
   using [homebrew](http://brew.sh/): `brew install hg`.

   ```sh
   brew install hg # maybe
   yarn test
   ```

7. If you haven't already, complete the CLA.

### Contributor License Agreement (CLA)

In order to accept your pull request, we need you to submit a CLA. You only need to do this once, so if you've done this for another Facebook open source project, you're good to go. If you are submitting a pull request for the first time, just let us know that you have completed the CLA and we can cross-check with your GitHub username.

[Complete your CLA here.](https://code.facebook.com/cla)

## How to try a development build of Jest in another project

To link `jest` on the command line to `jest-cli/bin/jest.js` in a development build:

```sh
cd /path/to/your/Jest_clone/packages/jest-cli
yarn link
```

To build Jest:

```sh
cd /path/to/your/Jest_clone

# Do one of the following:

# Check out a commit from another contributor, and then
yarn run build

# Or, save your changes to Jest, and then
yarn test # which also builds Jest
```

To run tests in another project with the development build of Jest:

```sh
cd /path/to/another/project
jest [options] # run jest-cli/bin/jest.js in the development build
```

* To decide whether to specify any options, see `test` under `scripts` in the `package.json` file of the other project.

To unlink `jest` on the command line from `jest-cli/bin/jest.js` in a development build:

```sh
yarn unlink jest-cli
```

## Bugs

### Where to Find Known Issues

We will be using GitHub Issues for our public bugs. We will keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new issue, try to make sure your problem doesn't already exist.

### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. Please provide a public repository with a runnable example.

### Security Bugs

Facebook has a [bounty program](https://www.facebook.com/whitehat/) for the safe disclosure of security bugs. With that in mind, please do not file public issues; go through the process outlined on that page.

## How to Get in Touch

* Discord - [#jest](https://discordapp.com/channels/102860784329052160/103622435865104384) on [Reactiflux](http://www.reactiflux.com/)

## Code Conventions

* 2 spaces for indentation (no tabs).
* 80 character line length strongly preferred.
* Prefer `'` over `"`.
* ES6 syntax when possible.
* `'use strict';`.
* Use [Flow types](http://flowtype.org/).
* Use semicolons;
* Trailing commas,
* Avd abbr wrds.

## License

By contributing to Jest, you agree that your contributions will be licensed under its BSD license.
