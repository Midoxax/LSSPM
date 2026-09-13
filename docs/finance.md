# Finance

Not yet implemented.

Entities: `invoice`, `payment`, `payment_plan`, `installment`, `expense`,
`refund`, `financial_transaction`. No boolean `paid` flag — payments carry a
state machine (`PENDING → PROCESSING → VERIFIED → FAILED/REFUNDED/CANCELLED`)
and are traceable to person, invoice, programme, method, amount, currency,
reference.

Invoice/receipt numbering must be unique and concurrency-safe (e.g.
`LSSPM/INV/2026/000001`), generated via a DB sequence or advisory lock — never
client-side.

Payment provider: abstract behind a `PaymentProvider` interface
(`createPayment`, `verifyPayment`, `refundPayment`, `handleWebhook`).
Candidate: CMI Morocco. No provider is wired up yet — do not fake successful
payment responses. Webhook handling must be idempotent on the provider's
transaction reference.
