# An IT portfolio that shows how Ethan works

Research date: 2026-10-10. Companion to [site-research.md](site-research.md) and [the current design direction](../DESIGN.md). This is a research proposal, not an implementation specification. No application code, infrastructure, or GitHub settings were changed.

## Follow-up from Ethan

Ethan confirmed he has experience in the networking/security topics discussed here and is open to using them for future projects or posts. Keep these ideas as possibilities, not a checklist or a requirement to build interactive tools. A short blog post about a subnetting concept, a troubleshooting experience, or a security practice can be a complete contribution on its own. Choose topics from what he actually wants to share; the research citations are supporting material, not proposed branding or credentials.

## Recommendation

Build a small public workshop: selected IT case studies, useful browser-based tools, and honest learning notes. Start with three connected artifacts: the site's own deployment case study, a tested automation script with sample input/output, and a backup/restore drill. Add an interactive tool after those have substance.

Ethan is IT by trade and wants to share other interesting technology he learns. The portfolio should communicate that breadth without positioning him as an experienced frontend developer, security engineer, or SRE unless his actual work supports it. A clear account of a difficult investigation can be more relevant to an IT role than a complex visual toy. That is my editorial judgment, not a measured claim about recruiter preferences. No recruiter interviews, hiring conversion data, or job-market survey were conducted.

The visual wrapper can be chunky, green, sandy, cyberpunk, and indie-web inspired. Use persistent section labels, terminal-like metadata, and strong accent blocks around real evidence. An imitation monitoring console should never imply that invented data is production telemetry. Personality belongs throughout the site; accuracy belongs in every claim.

## Evaluate the evidence, not the number of features

Give each selected project a short entrance: the problem, Ethan's contribution, current state, and links to evidence. A reviewer should be able to understand the purpose without running anything, then choose a deeper route into the write-up, source, demonstration, or test results. “Quickly inspectable” is a design target, not a claim about how many seconds recruiters spend reading.

Use explicit labels: **deployed**, **tested in my lab**, **simulated**, **prototype**, or **planned**. A project can contain several states. For example, the deployment pipeline can be real, while its failure animation is simulated. Include the date and environment of tests. Distinguish an observed result from an intended benefit; “restored these files and verified these hashes” is stronger than “enterprise-grade disaster recovery.”

Do not fill empty cards with inflated claims. If a real incident cannot be published, create a synthetic exercise and say so. Changing names does not automatically authorize publishing employer information. Prefer personal infrastructure or explicitly publishable work, and explain the boundary rather than suggest access to systems visitors cannot inspect.

## Feature shortlist

Effort bands are rough planning judgments: **S** is a bounded article or small enhancement; **M** includes several components and meaningful verification; **L** needs ongoing data, infrastructure, or substantial domain testing. They are not duration estimates. Evidence scores indicate potential relevance to IT work if executed honestly, from 1 (weak connection) to 5 (strong direct evidence). They are not predictions of hiring outcomes. “No new service” excludes existing VPS/domain charges and assumes static hosting.

| Idea | Effort | Added service cost | Operations | Evidence /5 | What a visitor inspects |
| --- | --- | --- | --- | ---: | --- |
| Site deployment and rollback case study | M | No new service | Low after setup | 5 | Workflow, release diagram, failed-build behavior, tested rollback |
| Tested automation script showcase | M | No new service | Low | 5 | Source, help, fixtures, failure tests, before/after workflow |
| Backup/restore drill report | M | Depends on lab storage | Low/periodic | 5 | Restore procedure, measured run, integrity checks, limitations |
| Incident investigation/postmortem | S–M | No new service | Low | 5 | Timeline, hypotheses, evidence, corrective actions |
| Interactive architecture/runbook | M | No new service | Low | 4 | Components, failure paths, recovery steps, diagram text alternative |
| Browser log explorer/redaction preview | M–L | No new service | Low server load; parser maintenance | 4 | Synthetic logs, filters, malformed-record behavior, redaction limits |
| IPv4 subnet/CIDR explainer | M | No new service | Low | 3 | Calculations, bit view, edge-case tests, readable explanations |
| Scoped permissions explorer | M–L | No new service | Medium correctness burden | 4 | One documented permission model and explicit unsupported cases |
| Curated learning lab/notebook | S initially | No new service | Editorial maintenance | 3 | Reproductions, mistakes, source links, next experiments |
| Site quality/release evidence page | S–M | No new service in baseline | Low | 4 | Dated checks, revision links, accessibility/performance limitations |
| Actual service status/history | L | May require monitoring service | Continuous | 3 | Defined checks, timestamps, outage history, freshness |

### 1. Deployment as the first real case study

The site is already a useful IT project: Markdown authoring, dependency installation, CI checks, release deployment, web serving, and recovery. Explain why a static build fits a 1 vCPU / 1 GB VPS and why the build runs elsewhere. Include a diagram with trust boundaries: repository, runner, SSH connection, release directories, and web server. The exact server software has not been inspected; do not draw Nginx as a confirmed component yet.

Publish the eventual workflow and a sanitized deployment script, with the commit that introduced them. Demonstrate one successful deployment, a failed build that leaves the live site unchanged, and a rollback from a deliberately broken lab release. Record what was tested and what remains untested. A workflow badge can link directly to runs, but only reports workflow state: GitHub documents branch-specific status badges, not a promise that the deployed website is healthy. [GitHub status badges](https://docs.github.com/en/actions/how-tos/monitor-workflows/add-a-status-badge)

Acceptance: readers can follow the deployment contract; no secrets appear; rollback is actually exercised before being described as available; links resolve to the relevant revision. Keep operational commands in the article, not in a public “run deployment” button. This project can grow naturally as deployment improves, without becoming an always-running platform.

### 2. Automation with evidence

Choose a real repetitive task Ethan understands: normalize an inventory export, validate configuration files, compare installed-software lists, or generate a report from synthetic workstation records. Keep v1 read-only. Show the input contract, sample dataset, output, dependencies, and failure behavior. The site can provide a simulated preview while the actual PowerShell or shell script lives in a repository.

For PowerShell, use discoverable help and examples; Microsoft documents comment-based help integrated with `Get-Help`. Pester's first-party quick start demonstrates tests and assertions. These provide inspectable mechanisms, not proof that every scenario is covered. [PowerShell comments/help](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_comments), [Pester quick start](https://pester.dev/docs/quick-start)

Acceptance: a fresh reader can run the sample without privileged access; missing fields, invalid files, and partial failures have defined outcomes; tests check important behavior rather than mirror implementation. Do not invent hours saved. If Ethan measures the workflow, explain the sample size and assumptions. Show how AI assisted the work and how he verified it when that is materially relevant; the ownership evidence is his ability to explain and maintain the result.

### 3. A restore drill rather than a decorative backup gauge

Create a bounded personal-lab exercise: back up a small synthetic dataset, remove the working copy in an isolated test location, restore it, and compare expected files or hashes. Record recovery duration only if actually measured; include dataset size, tool/version, destination, and start/end definition. A chart should visualize a real result or wear a conspicuous “simulation” label.

CISA explicitly recommends testing backup availability and integrity in recovery scenarios. That supports the relevance of the exercise; it does not certify Ethan's setup or establish an organizational recovery guarantee. [CISA StopRansomware guide](https://www.cisa.gov/stopransomware/ransomware-guide)

Acceptance: the report separates backup success from restore success, describes the verification, identifies what was not recovered or tested, and names the next improvement. Keep the first exercise small enough to reproduce. No new cloud storage plan is necessary merely to create portfolio content; the choice depends on the actual lab and available storage.

### 4. Incident analysis and operational explanations

A postmortem can show reasoning with very little code: symptom, impact, timeline, hypotheses, evidence, remediation, verification, and follow-up. Use an actual personal outage or a clearly labeled lab scenario. Include an unsuccessful hypothesis if it explains the investigation. Avoid blame and hindsight certainty. Google's own postmortem chapter illustrates the need for context and specific corrective actions, including a public example with sensitive details replaced. [Google SRE postmortem practices](https://sre.google/workbook/postmortem-culture/)

An interactive architecture page is a companion, not a substitute: selecting “DNS fails” might highlight a path and reveal the relevant runbook. The animation should use local scenario data, never alter infrastructure. Include the same runbook as readable text and ensure keyboard access. Acceptance: every selectable failure has a useful explanation, assumptions are visible, and the page remains informative without JavaScript.

### 5. Browser tools with a narrow contract

**Log explorer:** start with bundled synthetic JSON Lines records, a time filter, event counts, and a documented malformed-line path. Then consider optional local-file selection. The File API permits reading files that the user selects or drops; a server upload is unnecessary for local parsing. This is an implementation opportunity, not an automatic privacy guarantee. [MDN File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API)

A redaction preview is more defensible than “anonymizer”: pattern substitution can miss identifiers and sensitive free text. Document precisely what gets replaced and show a review step before export. Do not encourage visitors to paste workplace logs. CISA's logging guidance emphasizes useful event detail and protecting access to logs; a portfolio should model that care. [CISA logging guidance](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/use-logging-on-business-systems)

**Subnet explainer:** explain network/mask calculations rather than build another unexplained calculator. Scope v1 to IPv4 and specify how `/31`, `/32`, and host counts work. RFC 3021 treats `/31` point-to-point links specially, so “always subtract two” is not universally correct. Use documentation addresses in examples, following RFC 5737, instead of addresses copied from private infrastructure. [RFC 3021](https://www.rfc-editor.org/info/rfc3021/), [RFC 5737](https://www.rfc-editor.org/info/rfc5737/)

**Permissions explorer:** select one model, such as basic POSIX permission bits without ACLs, and document its limits. Do not combine Windows inheritance, cloud policies, and Unix bits into a supposedly universal access checker. Acceptance: unsupported conditions are explicit, examples are tested against the chosen environment, and explanatory labels describe decisions. This is a larger correctness commitment than its simple UI might suggest.

### 6. Learning and quality evidence

Create a notebook with entries structured as question → experiment → observation → next step. Topics can include Linux, networking, hardware, self-hosting, scripting, and whatever Ethan is learning. Separate a tutorial successfully reproduced from an original solution. Link sources and record versions when they affect reproducibility. A small “currently exploring” section is more honest than filling the homepage with unfinished project claims.

The site itself can expose dated quality reports and release notes. Lighthouse offers automated audits across categories, but a score should be presented with its run conditions; it is not proof of real-user experience or complete accessibility. Link the report and commit, then describe manual checks separately. [Chrome Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/overview)

An actual status page is lower priority. Build success does not establish uptime; a check from the same VPS cannot independently report that VPS's failure. Before adopting monitoring, define the service, check frequency, history, retention, and behavior when the data is stale. Do not show a permanent green dot backed by no check. A simple “last deployed” timestamp is an acceptable release fact, provided it is not labeled live status.

## Static delivery can still be interactive

Astro renders ordinary components to HTML and supports selectively interactive client islands. Tools can also use a small bundled script; adopting React is not a requirement. This means local calculations, scenario diagrams, and filters can run in visitors' browsers while Vultr serves files. Server islands are a different mechanism requiring a server adapter, not a necessary step for these tools. [Astro islands](https://docs.astro.build/en/concepts/islands/), [Astro server islands](https://docs.astro.build/en/guides/server-islands/)

Start small and measure. Put heavier parsing in a worker only if useful: workers can process data separately from the interface, but still consume browser CPU and memory, and can make network requests. They do not automatically establish isolation or privacy. Set documented input limits, allow cancellation, and handle malformed records. [MDN workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

For a tool claiming local processing, verify the complete page: no content sent through analytics, error reporting, external libraries, or fetch calls; no persistence without a clear reason; reset clears displayed state. Test with network inspection and fixtures. The site may still make ordinary requests for its assets. Phrase the claim specifically: “This tool processes your selected file in this browser and does not upload its contents,” only after verifying that behavior.

Keep public execution out of v1. A visitor-triggered shell, network scanner, arbitrary URL fetcher, or infrastructure control introduces abuse paths and resource limits unrelated to serving a static portfolio. Downloads and recorded demonstrations can show the same work without granting access. Never put a private token into client JavaScript. A future API needs a separate, justified design with bounded inputs and operations; a chatbot is not necessary to make the site interesting.

### Optional real hosted services

Static delivery is a starting architecture, not a permanent restriction. Two later experiments could make real operations visible:

- **Read-only deployment receipt API:** a small service returns the current public revision, deployment time, and schema version from a deliberately public record. It accepts no shell commands, URLs, or credentials. Compare this with publishing the same JSON during deployment; if the static record solves the need, a service is only justified as an explicitly educational exercise. Effort M; no required additional subscription; ongoing process supervision, patching, bounded request handling, and memory measurement. A reviewer can inspect the contract, tests, deployment, and documented failure behavior.
- **Scheduled public-site checks with a status history:** a background task checks a fixed allowlist of Ethan-owned public URLs and publishes bounded results through static JSON or a read-only API. The visitor does not select targets. Effort L because data freshness, retention, check reliability, and ongoing operation matter. Hosting it on the same VPS limits outage detection; an independent checker is needed before claiming externally observed availability. An external monitor may add costs, which require fresh provider research before selection. A reviewer can inspect check definitions and actual historical observations rather than a simulated dashboard.

Neither needs access to the home lab. Both remain proposals: measure spare VPS resources, inspect the current service setup, and establish useful operational learning before choosing a runtime stack. A toy receipt endpoint is not automatically stronger evidence than a well-tested static deployment. The justification should name the behavior requiring a service, or honestly state that learning service operation is itself the goal.

## Phased backlog and finish criteria

1. **Evidence foundation:** publish one real project page and a learning note using the Markdown workflow. Finish when each has a clear state, contribution, sources, and working links. Avoid adding empty routes.
2. **Deployment evidence:** complete Actions-to-Vultr publishing, then write the case study from observed behavior. Finish when failed-build behavior and rollback have recorded tests and the diagram matches the actual setup.
3. **IT depth:** publish one automation artifact and one restore exercise. Finish when fixtures are reproducible, material failures are addressed, and every result is supported or explicitly unmeasured.
4. **Interactive experiment:** choose the log explorer or subnet explainer based on current learning. Finish when it handles invalid inputs, works with keyboard/narrow screens, has meaningful correctness tests, and adds no server execution endpoint.
5. **Editorial maintenance:** add review dates and retire broken experiments. A useful archive may contain unfinished ideas, but selected work should remain truthful about whether it still runs.

The top three are deployment, automation, and restore evidence because they connect directly to the stated IT background and existing infrastructure. If no suitable lab environment exists, swap the restore drill for a synthetic incident investigation. These are recommendations for the next sessions, not permission to alter production or a commitment to implement every idea. Exact role targets, available publishable work, browser compatibility, VPS configuration, and all demo implementations remain unverified.
