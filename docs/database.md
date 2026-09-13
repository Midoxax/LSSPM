# Database

## Current state — critical flag

No database is wired into `lsspm-platform` yet (no Supabase client, no
migrations, no schema in this repo).

The only Supabase project reachable from this account is:

- **Midoxax's Project** (`skxxvgjjdshcopybokdt`, eu-west-2, Postgres 17, ACTIVE_HEALTHY)

Inspecting it (read-only) shows ~140 tables with real, non-zero rows —
`profiles` (19), `psychologist_profiles` (8), `bookings` (5), `crm_contacts`
(22), `audit_log` (80), plus `treatment_plans`, `session_notes`,
`crisis_alerts`, `discharge_summaries`, `client_anamneses`, gamification
(XP/quests/badges), subscriptions/payments, and an ops workspace. RLS is
enabled on every table.

**This is a separate, already-running mental-health/coaching marketplace
product — not LSSPM.** Its schema has no programmes, cohorts, enrollments,
admissions, or membership tables, and several tables carry clinically
sensitive data (session notes, discharge summaries, crisis alerts). It must
not be reused, extended, or migrated for LSSPM. Per the audit brief: never
assume a connected resource is safe to modify, and stop when the environment
can't be confirmed as the right one — this is that stop.

**Action needed from you before Phase 1**: create (or point me to) a Supabase
project dedicated to LSSPM, ideally with separate dev/staging projects so
production is never the first place schema work lands.

## Proposed schema (once a real project exists)

Core entities per the brief: `person`, `user`, `role`, `permission`,
`programme` → `cohort` → `module` → `session`, `enrollment`, `attendance`,
`evaluation`, `certificate`, `application` (+ documents), `invoice`,
`payment`, `payment_plan`, `installment`, `expense`, `event`, `crm_contact`/
`lead`, `workflow`/`workflow_execution`, `audit_log`. UUID PKs, FKs, unique
constraints, `created_at`/`updated_at`, soft deletes where appropriate, all
schema changes via migrations — no manual DDL against a live project.
