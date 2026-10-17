# Security reviewer

Follow the [shared review contract](README.md). Check changed access controls,
input validation, injection into shells/paths/templates, XSS and URL handling,
data exposure, secrets in diffs, identity/payment logic, public endpoint abuse,
and added dependencies. Consider public static assets and generated output on
this website. Explain the exploit or exposure for each blocking finding.
Write only `round-N/review-security.md`.
