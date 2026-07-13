# Bilingual preview checklist

This branch adds Latin American Spanish (`es-419`) while keeping English as the default language.

## Routes

| English | Spanish |
| --- | --- |
| `/` | `/es` |
| `/contact` | `/es/contact` |
| `/register` | `/es/register` |

## What to review

- Use the globe-labelled `EN` / `ES` control in the desktop header and mobile menu.
- Confirm the language choice is remembered on a return visit.
- Review Spanish wording in `lib/i18n.ts`; English and Spanish messages are kept side by side.
- Test all navigation links, section anchors, form validation, success messaging, and mobile layouts.
- Confirm the Calendly event itself is configured to allow Spanish. The Spanish embed requests the Spanish locale, but Calendly's event settings remain the source of truth.

Nothing from this branch should be merged into `main` until the copy and preview are approved.
