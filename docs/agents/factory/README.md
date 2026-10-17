# Software factory

A file-based development workflow any coding agent can follow. Start at the
repository's `AGENTS.md`. Codex discovers the repository skill at
`.agents/skills/factory/SKILL.md`; other agents can follow these docs directly.
This is an agent-operated workflow,
not a background service: an agent must be running to advance jobs.

## Use

In Codex, invoke the repository skill with an action and target:

```text
$factory start issue #123
$factory next
$factory resume 123-feature-name
$factory approve 123-feature-name for merge
$factory rework 123-feature-name: <feedback>
```

Type `$` and select `factory` from the skill picker, or type `$factory` directly.
If it does not appear after the files change, restart Codex in this repository.
`/factory` is not registered by Markdown docs, and `.ai/` is not a Codex skill
discovery directory. See [OpenAI's skill discovery documentation](https://learn.chatgpt.com/docs/build-skills).

Ask your agent in plain language:

- “Run the factory for GitHub issue #123.”
- “Run the next ready-for-agent issue through the factory.”
- “Resume factory job 123-feature-name.”
- “Approve factory job 123-feature-name for merge.”
- “Rework factory job 123-feature-name: <feedback>.”

The agent follows [workflow.md](workflow.md). Work and specifications remain in
GitHub Issues, following [issue-tracker.md](../issue-tracker.md). Local job
folders hold execution evidence and are ignored by Git. Publish the spec and
final summary back to the issue so another checkout can recover the work.

```text
issue → spec → build → security / UX / UI / code reviews
                 ↑                 │
                 └── changes ───────┘  (at most two automatic rebuilds)
                                   ↓ all pass
                            approval → merge or needs-human
```

If the host supports delegation, assign the [roles](roles/README.md) to separate
agents; run the four reviewers concurrently when supported and authorized.
Otherwise execute each role sequentially, reading its instructions before each
pass. Record the execution mode; sequential reviews are self-review, not
independent review. The file contracts and completion gates are identical.

## Files and dashboard

- `docs/agents/factory/`: shared workflow and role instructions.
- `.agents/skills/factory/`: Codex skill entry point into the shared workflow.
- `factory/dashboard.html`: local read-only job viewer.
- `factory/jobs/<job-id>/`: local state, spec, build evidence, reviews, decision.
- `factory/worktrees/<job-id>/`: isolated checkout on `factory/<job-id>`.

From the repository root, run:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory factory
```

Open <http://localhost:8000/dashboard.html>. Python 3 is optional and needed only
for this viewer. It polls the server's directory listings every two seconds;
opening the HTML as a file or serving it through Astro does not supply those
listings. Job records stay local and are not part of the public website.

For an agent that does not discover `AGENTS.md`, point it directly at this file.
No tool-specific copies of the workflow need to be maintained.

## Source

Adapted from [Zazen Codes' Software Factory for Claude Code](https://github.com/zazencodes/zazencodes-season-3/tree/555467c365e6750278efba09349369109f62f65f/src/software-factory-claude-code),
revision `555467c365e6750278efba09349369109f62f65f`.
The dashboard is adapted from that source; the workflow and roles preserve its
spec/build/four-review/approval loop. This version replaces Claude-specific
tools and model assignments with capability-based instructions, uses this
repository's issue tracker instead of a second backlog, and supports sequential
execution. Upstream example jobs and the historical build prompt are omitted.
