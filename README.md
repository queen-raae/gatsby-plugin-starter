# @raae/gatsby-plugin-starter

_A starter to bootstrap your next Gatsby Plugin_  
_— automatic release to npm with semantic-release out of the box_

&nbsp;

[![Tweet by @Ash_Hitchcock: almost forgot thanks to @raae the Gatsby Plugin starter ... made the plugin blazingly fast to write, with full Semantic Release to NPM Raising hands](https://queen.raae.codes/testimonials/gatsby-plugin-starter-ash.png "Tweet by @Ash_Hitchcock")](https://twitter.com/Ash_Hitchcock/status/1471048277747548163?s=20&t=YKN2khQAbqaLSSccqculsw)

&nbsp;  
**Heads up:** This package is _NOT_ to be used as a Gatsby Plugin; it's a template for you to bootstrap your own plugin.

&nbsp;

## A message or two or three from Queen Raae 👑

### 1-on-1 Emergency Gatsby Call

Are you stuck on a reef in the sharky waters around the Gatsby islands? Check out [1-on-1 Emergency Gatsby Call](https://queen.raae.codes/gatsby-emergency/) with Queen Raae to get friendly advice you can put into action immediately from a seasoned Gatsby developer.

### Stay updated and get the most out of Gatsby

Learn how to get the most out of Gatsby and **stay updated** on the template by [subscribing](https://queen.raae.codes/emails/?utm_source=readme&utm_campaign=plugin-starter) to daily emails from Queen Raae and Cap'n Ola.

### Video Walkthrough

Watch Queen Raae use this starter to create a new Gatsby plugin in a unauthorized and rum-fueled [treasure hunt](https://youtu.be/eaZm9MC0GeE) in the sharky waters around the Gatsby islands on [YouTube](https://youtu.be/eaZm9MC0GeE).

&nbsp;

## Create your next Gatsby Plugin

### Get started

1. [Use this template](https://github.com/queen-raae/gatsby-plugin-starter/generate) to create a new repository based on the code in this repository, but with a clean history. There is no need to drag all the commits of this repository by forking.
2. Select the correct owner and give it a name according to the [Gatsby Plugin naming standard](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/naming-a-plugin).

**Note:** You will get a message about failing releases, this is expected and will sort itself out when you are ready for your [first release](https://github.com/queen-raae/gatsby-plugin-starter#release).

### Make it yours

1. Clone your new repository onto your machine
2. Make the readme template the root template (`mv README_TEMPLATE.md README.md`)
3. Delete the changelog (`rm CHANGELOG.md`)
4. Search and replace `@raae/gatsby-plugin-starter` with the name of your plugin
5. Search and replace `github.com/queen-raae/gatsby-plugin-starter` with the link to your repository
6. Search and replace `queen@raae.codes` with your email address
7. Search and replace `@raae` with your GitHub username
8. Change the description in `plugin/package.json`
9. Change the tag line in `README.md`
10. Run `yarn install`
11. Commit changes `git commit -a -m "chore: rename all the things"`
12. Create an initial tag (`git tag v0.0.0 -a -m "Initial tag"`) and push it (`git push origin --tags`)

### Develop and test

Check the `CONTRIBUTING.md` file.

### Release

The project uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and [semantic versioning](https://semver.org/) to automate releases by utalizing the [semantic-release](https://semantic-release.gitbook.io/) project and GitHub Actions.

As the project owner, you need to add an NPM token to your repository secrets so that Semantic Release can do its thing 💪

- Create an automation access token on [npmjs.com/](https://www.npmjs.com/) (Avatar -> Access Token).
- Add `NPM_TOKEN` to your repository secrets (Settings -> Secret -> Action) with the value from above.

#### Semantic Release Settings

Commits to the main branch will result in a new release while committing to a next branch will result in a pre-release. The releases follow [Semantic Versioning](https://semver.org/), and [your commit messages](https://github.com/semantic-release/commit-analyzer) will decide the following version number.

- Commits message titles prefixed by `fix:`, `fix(<scope>):` and `docs(README):` will result in a patch version update
- Commits message titles prefixed by `feat:`, `feat(<scope>):` will result in a minor version update
- Commits message footers containing `BREAKING CHANGE:` or `BREAKING CHANGES:` will result in a major version update

In addition to automating releases, Semantic Release creates and updates a `CHANGELOG.md` based on the above commit rules.

Check the `.releaserc` file, the `.github/workflows/release.yml` and the [Semantic Release documentation](https://semantic-release.gitbook.io/) for more details.

&nbsp;

## Questions, Feedback, and Suggestions

If you have any questions, feedback, or suggestions, head on over to [discussions](https://github.com/queen-raae/gatsby-plugin-starter/discussions).

## Found a bug?

If you find a bug, please open an [issue](https://github.com/queen-raae/gatsby-plugin-starter/issues) and create a pull request to fix it if you are able.
