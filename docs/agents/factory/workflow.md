# Factory workflow

Read [README.md](README.md) first. One coordinator owns one job and is its only
`job.json` writer. Other roles write only their assigned evidence files; the
builder also changes and commits implementation files in the job worktree.

## Start

1. Read root `AGENTS.md` and its required docs. Check the current working tree
   before changing files. Read the requested GitHub issue; for a feature without
   an issue, create one following `docs/agents/issue-tracker.md`. For “next”, read
   `docs/agents/triage-labels.md`, list open `ready-for-agent` issues, and choose
   the oldest unclaimed one. Comment with the job ID when claiming it; reread
   comments to detect competing claims and choose another issue if needed.
2. Use `<issue-number>-<short-kebab-slug>` as the job ID. Exclusively create
   `factory/jobs/<job-id>/` without overwriting an existing folder. If it exists,
   resume that job or use a unique suffix for an explicitly separate attempt.
   Record the issue URL, original request, execution mode, base branch and
   resolved base commit in `job.json`. Discover the repository's default branch
   rather than assuming a name. Use the current local base and record whether
   it was refreshed; fetch when authorized and available.
3. Create `factory/<job-id>` and its worktree with
   `git worktree add -b factory/<job-id> factory/worktrees/<job-id> <base-commit>`.
   Resolve absolute paths before dispatch. Keep the user's checkout intact.
   Use the worktree as the working directory for implementation commands.
   Respect host filesystem permissions; request an actual required permission
   rather than silently abandoning isolation.
4. Read the worktree's `README.md`, `package.json`, lockfile, and relevant docs
   for setup and validation. Install with `pnpm install --frozen-lockfile`.
   There is currently a build script but no test or lint script; use the actual
   scripts available at execution time. For visible changes use an available
   browser tool, a free job-specific port, and an isolated browser session.
   Record actual ports in state; avoid interfering with existing servers.
5. Run [spec-writer](roles/spec-writer.md). Check that `spec.md` has observable
   acceptance criteria and publish it to the issue. Resolve material product
   decisions with the user before building dependent behavior.
6. Set stage `build`; run [builder](roles/builder.md). A `STATUS: READY` first
   line and evidence for every criterion are required to enter review.
   `STATUS: BLOCKED` or a missing/invalid output enters **Needs human**.

## Review and rebuild

1. Increment `round` (initially 0), create a new `round-N/`, set stage `review`,
   and reset all four review values to `pending`. Record the exact branch HEAD
   as `reviewedCommit`. Freeze implementation until all four reviews finish.
2. Run the [four reviewers](roles/README.md), independently when delegation is
   available, otherwise sequentially with each checklist. Provide each role:
   absolute job and worktree paths, branch, base commit, reviewed commit, round,
   issue URL, and its assigned output path. Browser roles also receive their
   port and session name. Each role reads repository guidance itself.
3. Wait for all four files. Each must start exactly `VERDICT: PASS` or
   `VERDICT: CHANGES`. Record verdicts as they arrive. Missing or invalid output
   is incomplete review, never PASS. Required checks that cannot be performed
   must be reported as blocking with the missing evidence.
4. If every reviewer passes the same commit, enter **Approval**. Otherwise
   send all findings to the builder after the entire round completes. Resume
   the same builder when possible; a replacement reads all job history.
   Allow at most two automatic rebuilds (three review rounds total). Exhaustion
   enters **Needs human**, identifying outstanding findings. Keep earlier
   review folders immutable.

## Approval and merge

Run [approver](roles/approver.md) at stage `approve`. `APPROVE` is a technical
recommendation. Merge when the user's request authorizes it; otherwise present
the concrete reviewed branch and decision for approval and set `needs-human`.
Starting a factory job alone authorizes implementation and review, not merge
or deployment. Record any applicable authorization in the job.

Before merging, confirm the implementation tree is clean, HEAD still equals
`reviewedCommit`, all final reviews pass, and the target checkout is clean and
on the recorded base branch. Check for conflicts with the current base. If the
base moved since review, update the job branch and repeat validation and all
reviews against the new base before approval. A conflict or busy checkout
enters **Needs human**; preserve all work.

With approval and checks satisfied, merge using
`git merge --no-ff factory/<job-id>` in the target checkout. Confirm the reviewed
commit is an ancestor of the base branch, record the merge commit, and set
`merged`. Publish the decision and validation summary to the issue; close it
only when its acceptance criteria are satisfied by the merge. Push or deploy
only when authorized. Remove only this job's clean worktree after inspecting
its resolved path and status; retain the branch and local evidence for recovery.

## Needs human, resume, approve, rework

Set `needs-human` and record the specific blocker, attempted checks, next action,
and preserved branch/worktree in `decision.md` starting `ESCALATE`. Update the
issue with the blocker and ask only for the missing decision or permission.

On resume, reconcile state with actual files, Git refs, and issue updates.
Restart unfinished roles; verify completed output against its recorded commit.
Never infer successful reviews or merges from state alone. A lost local job
can be reconstructed from the issue and preserved branch, but missing evidence
requires new validation and reviews.

On “approve”, check the scope of the user's authorization and rerun all merge
gates. Approval does not turn failing checks into passes. On “rework”, save the
feedback as `rework-K.md`, keep old evidence, reset the automatic rebuild budget,
and return to the builder. Continue with a new round number. For a merged job,
create a follow-up issue/job instead of rewriting its history.

## State contract

Rewrite the entire JSON atomically (temporary file then rename) after each
transition. Write role outputs fully before recording their verdicts. Example:

```json
{
  "id": "123-feature-name",
  "feature": "Original request",
  "issue": "https://github.com/ethan-greentree/website/issues/123",
  "mode": "sequential",
  "branch": "factory/123-feature-name",
  "baseBranch": "main",
  "baseCommit": "full commit SHA",
  "worktree": "absolute path to factory/worktrees/123-feature-name",
  "stage": "spec",
  "round": 0,
  "rebuilds": 0,
  "reviewedCommit": null,
  "reviews": { "security": "pending", "ux": "pending", "ui": "pending", "code": "pending" }
}
```

Stages: `spec`, `build`, `review`, `approve`, `needs-human`, `merged`.
Review values: `pending`, `PASS`, `CHANGES`. Keep secrets out of job evidence.
The viewer reads these fields; extra fields can capture ports, blockers,
authorization, timestamps, and merge commit. No shared index file is needed.
