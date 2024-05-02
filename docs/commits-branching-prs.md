Commit naming conventions
In order to improve communication, we will use the same commit naming conventions in code.

We will be using the <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">conventional commit guidelines</a>.

### Format of commit message

```
<type>(<scope>): <subject> (ticket number)
```

### Definitions:

- The **type** and **subject** are mandatory while the **scope and ticket number** are optional.
- A **ticket number** might be added to the end of the subject line, so the commit creates an automatic link to the ticket.
- Any line of thee commit message cannot be longer than 100 characters. This allows the message to read easier in the repository as well as by tools.

### TYPE

- **build**: Changes that affect the build system or external dependencies (example: yarn, npm, etc)
- **ci**: Changes to our CI configuration files and script (example scopes: Circle, BrowserStack, SauceLabs)
- **chore**: Changes which doesn’t change source code or tests e.g. changes to the build process, auxiliary tools, libraries.
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: Revert something
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colors, etc.)
- **test**: Adding missing tests or correcting existing tests

### SCOPE

Scope could be anything specifying place of the commit change or functionality affected. i.e., **login**, **logout**, **changelog**.

### SUBJECT

The subject contains a succinct description of the change:

- Don’t capitalize the first letter of any word
- No dot (.) at the end

### Commit naming examples

```
docs(changelog): update changelog to beta 5
feature(login): add validation to login fields
```

## Branching process

### Branch naming convention

```
<type>/<story-number>-<feature-name>
```

### Merge request process

**Assumptions**

- A technical story has been assigned to the developer
- The developer has finished the technical story and is ready for code review

Once developer has finished technical story, a Pull Request (PR) must be created. The PR will be reviewed by peers following [HML & CSS Coding Guidelines ](https://codigoingeniero.atlassian.net/wiki/spaces/SD/pages/1016039)and any changes/improvements discussed.

Our tool of choice for version control is Github and all PRs will done via this platform.

### When to merge changes?

To merge changes, a PR needs to have all required approvals and all suggested changes/fixed applied to the code. This can mean that multiple iterations of code changes/reviews are needed before the PR is finally approved.

**No Pull Request can be merged into the develop branch without first being fully approved.**
