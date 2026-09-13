# Security

## Current state

No auth, no RLS, no secrets in this repo (checked — no `.env*` tracked).
Nothing to harden yet.

## Non-negotiables for Phase 1+

- Supabase Auth for identity; every sensitive table gets RLS — route/UI
  checks are UX only, never the enforcement boundary.
- Object-level scoping: a trainer only sees their assigned programme's
  participants; a participant only sees their own records; finance staff
  don't automatically get academic data access.
- No service-role key or secret ever committed or exposed to client code.
- Sensitive-data tiers to keep separate: public / professional / academic /
  administrative / financial / potentially clinical. No clinical/patient
  record system in the initial platform — if that's ever requested it gets
  its own dedicated security review, not folded into this schema.
- The Supabase project currently reachable from this account
  (`skxxvgjjdshcopybokdt`) belongs to a different, already-live product and
  holds real user + clinically-adjacent data (session notes, discharge
  summaries, crisis alerts). It is out of scope for LSSPM and was not
  touched beyond a read-only table listing during this audit.
