# Academic / Training Management

Not yet implemented.

Hierarchy: `programme → cohort → module → session → enrollment → attendance
→ evaluation → certification`. A programme has fields for title, slug,
objectives, audience, prerequisites, duration, modality, location, price,
capacity, deadline, trainers, coordinator, certificate requirements, status.

Attendance statuses: `PRESENT`, `ABSENT`, `LATE`, `EXCUSED`. Attendance feeds
certificate eligibility (e.g. 80% threshold) — see `certificates.md`.
Architecture should leave room for QR-based check-in later.
