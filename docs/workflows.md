# Workflow Automation

Not yet implemented.

Proposed generic engine: `Trigger → Condition → Action → Execution → Execution Log`,
idempotent, every run logged, failures surfaced to admins.

Candidate triggers: `APPLICATION_SUBMITTED`, `PAYMENT_VERIFIED`,
`PAYMENT_OVERDUE`, `DOCUMENT_MISSING`, `SESSION_APPROACHING`,
`SESSION_COMPLETED`, `CERTIFICATE_ELIGIBLE`, `MEMBERSHIP_EXPIRING`,
`EVENT_REGISTERED`, `EVENT_APPROACHING`.

Depends on: `database.md` (needs a real LSSPM project), `finance.md`,
`admissions.md`, `academic.md` for the entities that emit these triggers.
