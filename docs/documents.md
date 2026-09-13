# Documents

Not yet implemented.

Types: CIN, photo, CV, diploma, certificate, application documents,
contracts, invoices, receipts, attendance/trainer documents, correspondence.

Statuses: `REQUIRED`, `RECEIVED`, `UNDER_REVIEW`, `VALIDATED`, `REJECTED`,
`EXPIRED`.

Private documents use private storage (Supabase Storage initially) with no
predictable public URLs; sensitive document access is auditable via
`audit_log`.

## Generation

Templated generation for: inscription attestations, training agreements,
receipts, invoices, attendance/participation attestations, certificates,
membership cards, convocations, trainer contracts. Every generated official
document carries a unique reference, issue date, issuing entity, related
person/programme, type, and version — no fabricated content.
