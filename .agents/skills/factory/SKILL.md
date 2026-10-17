---
name: factory
description: Run this repository's software factory for a GitHub issue, select the next ready issue, or resume, approve, or rework an existing factory job.
---

# Software factory

Work from the repository root containing this skill. Read `AGENTS.md`,
`docs/agents/factory/README.md`, and `docs/agents/factory/workflow.md`, then
follow the workflow for the requested action. Paths in those documents are
relative to the repository root.

Use the issue number, job ID, or rework feedback supplied with the invocation.
For `next`, select an issue using the workflow. For `start`, require an issue
or feature request; for `resume`, `approve`, or `rework`, require a job ID.
Ask for any missing action or required target before starting a job.
Load role instructions as each stage requires them; keep job evidence in
`factory/jobs/` and implementation in the job's worktree.

Starting a job authorizes implementation and review. Apply the workflow's
authorization and validation gates before merging, pushing, or deploying.
