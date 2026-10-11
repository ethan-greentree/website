# Issue tracker: GitHub

Issues and specs live in ethan-greentree/website.
Use the gh CLI with --repo ethan-greentree/website.

## Operations

- Create: `gh issue create --repo ethan-greentree/website --title "..." --body-file <file>`
- Read: `gh issue view <number> --repo ethan-greentree/website --json number,title,body,labels,comments`
- List: `gh issue list --repo ethan-greentree/website --state open`
- Comment: `gh issue comment <number> --repo ethan-greentree/website --body-file <file>`
- Label: `gh issue edit <number> --repo ethan-greentree/website --add-label "<label>"` or `--remove-label "<label>"`
- Close: `gh issue close <number> --repo ethan-greentree/website`

For multiline bodies, write the text to a temporary file and use --body-file.

When a skill says "publish to the issue tracker", create an issue.
When it says "fetch the relevant ticket", read the issue.

PRs as a request surface: no.
