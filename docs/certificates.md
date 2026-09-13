# Certificates

Not yet implemented.

Issued only when attendance/evaluation eligibility is actually met — no
manual override that bypasses the rule. Fields: certificate number (unique),
participant, programme, cohort, dates, hours, issuing entity, signatories,
verification code.

Public verification at `/verify/[certificate-number]` returns only what's
needed to confirm authenticity — no private participant data.
