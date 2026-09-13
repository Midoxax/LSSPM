# Deployment

## Current state

- No deployment has been made. A production deploy attempt via the Vercel
  MCP tool was blocked by the harness's own permission system — correctly,
  per this project's rule against unapproved production changes.
- GitHub push is blocked in this environment: no PAT or SSH key configured.
  An SSH keypair was generated locally (`~/.ssh/id_ed25519`) but its public
  key has not yet been added to the GitHub account.
- Vercel: connected, team `upsy-final` (hobby plan). No project created yet.

## Target flow

`GitHub → Vercel Preview → testing → approval → Production`, matching the
brief: deliberate production deploys only, never as a side effect of a local
build failing.
