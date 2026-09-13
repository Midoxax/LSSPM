# Roles & Permissions

Not yet implemented — no auth exists in the repo.

## Proposed roles

`SUPER_ADMIN`, `DIRECTION`, `ADMINISTRATION`, `FINANCE`, `FORMATION`,
`COMMUNICATION`, `HR`, `SCIENTIFIC_COMMITTEE`, `TRAINER`, `MEMBER`,
`PARTICIPANT`.

## Proposed permission verbs

`VIEW`, `CREATE`, `UPDATE`, `DELETE`, `APPROVE`, `EXPORT`,
`GENERATE_DOCUMENT`, `ACCESS_FINANCE`, `ACCESS_PERSONAL_DATA`,
`ACCESS_REPORTS`, `MANAGE_USERS`, `MANAGE_ROLES`.

Object-level scoping is required, not just role checks — e.g. a trainer sees
only their assigned programme's participants; a participant sees only their
own records. Enforcement point is Postgres RLS (see `security.md`), not
route guards.
