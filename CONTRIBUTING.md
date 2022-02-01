# Welcome to Gatsby Plugin Starter docs contributing guide <!-- omit in toc -->

Thank you for your interest in contributing to the Gatsby Plugin Starter.

Both [code](https://github.com/queen-raae/gatsby-plugin-starter/blob/main/CONTRIBUTING.md#contribute-with-code) and [other types](https://github.com/queen-raae/gatsby-plugin-starter/blob/main/CONTRIBUTING.md#contribute-in-other-ways) of contributions are welcome.

## Getting started

- Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.
- Read the [README](README.md) to get an overview of the project.
- Browse the [issues](https://github.com/queen-raae/gatsby-plugin-starter/issues) and [discussions](https://github.com/queen-raae/gatsby-plugin-starter/discussions) already taking place to familiarize yourself with the state of the project.

## Contribute with code

You may either solve an exciting [issue](https://github.com/queen-raae/gatsby-plugin-starter/issues), or create a new [issue](https://github.com/queen-raae/gatsby-plugin-starter/issues/new).

Either way, make sure to outline your plan of action and get some feedback before spending too much time on your solution.

If you are new to open source code contributions, here are some links to get you started:

- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

### Fork, Clone and Install

1. Fork this repository
2. Clone the fork to your local machine: `git clone /git@github.com:<username>/gatsby-plugin-starter.git`
3. Move into repo folder: `cd gatsby-plugin-starter`
4. Install packages: `yarn install`

#### Yarn Workspace

The project uses [yarn workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to host the plugin and demo codes in one repository.

When installing dependencies, make sure to include `workspace plugin` or `workspace demo` to the command so that dependencies are added to the correct workspace: `yarn workspace plugin add lodash`.

Important note from the yarn workspace docs:

> Be careful when publishing packages in a workspace. If you are preparing your next release and you decided to use a new dependency but forgot to declare it in the package.json file, your tests might still pass locally if another package already downloaded that dependency into the workspace root. However, it will be broken for consumers that pull it from a registry, since the dependency list is now incomplete so they have no way to download the new dependency. Currently, there is no way to throw a warning in this scenario.

### Development

Run demo: `yarn develop`

[TODO] Project structure
[TODO] Style guide

### Testing

[TODO] Add a test and document

### Pull Request

When finished with the changes, create a pull request, also known as a PR.

[TODO] How to name the PR
[TODO] Only squash merge allowed

### Semantic Release

The project uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and [semantic versioning](https://semver.org/) to automate releases by utalizing the [semantic-release](https://semantic-release.gitbook.io/) project.

## Contribute in other ways

### Questions, Feedback and Suggestions

If you have any questions, feedback or suggestions head on over to [discussions](https://github.com/queen-raae/gatsby-plugin-starter/discussions).

### Found a bug?

If you find a bug please open an [issue](https://github.com/queen-raae/gatsby-plugin-starter/issues) and/or create a pull request to fix it.
