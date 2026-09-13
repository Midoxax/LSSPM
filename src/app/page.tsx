const modules = [
  {
    name: "Website",
    detail: "The public face of the institution — programs, news, and the entry point into every application.",
  },
  {
    name: "Admissions",
    detail: "Applications, review, and offers tracked in one pipeline from inquiry to enrollment.",
  },
  {
    name: "Training",
    detail: "Courses, cohorts, attendance, and academic records for every program the institution runs.",
  },
  {
    name: "Finance",
    detail: "Invoicing, payments, and ledgers reconciled against enrollment and student accounts.",
  },
  {
    name: "CRM",
    detail: "Every contact — prospect, student, alumnus, partner — with a shared history of outreach.",
  },
  {
    name: "Portals",
    detail: "Self-service for students and staff: records, schedules, requests, and results.",
  },
  {
    name: "Documents",
    detail: "Transcripts, contracts, and certificates — filed, versioned, and signed without paper.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <header className="border-b border-rule">
        <div className="mx-auto max-w-4xl px-6 py-5 flex items-center justify-between">
          <span className="font-serif text-lg tracking-tight">LSSPM</span>
          <a
            href="#modules"
            className="text-sm text-slate hover:text-ink transition-colors"
          >
            Platform
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pt-20 pb-16">
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.15] max-w-2xl text-ink">
            One system of record for the whole institution.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate">
            Admissions, training, finance, and CRM run on separate spreadsheets
            and separate logins today. LSSPM puts them on one platform, with
            one student record shared across every department.
          </p>
          <a
            href="#modules"
            className="mt-9 inline-block border border-ink px-5 py-2.5 text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            See the modules
          </a>
        </section>

        <section id="modules" className="border-t border-rule">
          <div className="mx-auto max-w-4xl px-6">
            {modules.map((m) => (
              <div
                key={m.name}
                className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-1 py-7 border-b border-rule"
              >
                <h2 className="font-serif text-xl text-ink">{m.name}</h2>
                <p className="text-sm leading-relaxed text-slate max-w-md">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <p className="max-w-md text-sm leading-relaxed text-slate">
            Workflows connect the modules automatically — an accepted
            application opens a student account, a signed contract triggers
            the first invoice, a completed course updates the transcript.
          </p>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-slate">
          LSSPM Digital Institutional Platform
        </div>
      </footer>
    </div>
  );
}
