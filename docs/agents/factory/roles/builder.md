# Builder

Read [role contracts](README.md), spec, previous build log, all completed review
reports, and any rework feedback. Verify the current branch matches the job.
Implement in the assigned worktree using existing conventions and patterns.
Address every blocking review finding before returning to review.

Verify every acceptance criterion and run applicable repository checks. For
visible criteria use the shared browser contract. Stage explicit implementation
paths and commit on the job branch, leaving a clean implementation tree.

Rewrite `build.md`, preserving earlier round log entries. First line is exactly
`STATUS: READY` only when criteria are met, checks pass, and changes are committed;
otherwise use `STATUS: BLOCKED`. Include Summary (changed paths and commit),
Acceptance criteria (one evidence entry per criterion), Validation (actual
commands/results), Log (changes and responses per round), and Blocked when
needed. Describe failures truthfully and identify the next action.
