# Personal Expense Tracker - Expansion Roadmap

## Vision Statement

A **personal finance tracker** with intelligent automation, cross-platform access, and seamless user experience.

---

## Current State (v1.0.0)

- Multi-tenant Apps Script backend with auto-provisioned per-user tabs
- Google OAuth via Firebase Authentication
- Real-time currency conversion with Open Exchange Rates API
- User admin panel with add/edit/delete expenses
- Variable expense type for changing monthly bills
- Internationalization (English, Spanish, Haitian Creole)
- PWA support with offline caching
- Dark/light theme toggle

---

## Short-Term Priorities

### User Experience
- [ ] Onboarding wizard for new users
- [ ] User templates (College Student, Young Professional, etc.)
- [ ] More language translations

### Expanded Expense Types
- [ ] Weekly expenses
- [ ] Quarterly expenses
- [ ] Annual expenses (property tax, subscriptions)
- [ ] One-time expenses

### Notifications
- [ ] n8n/webhook integration for reminders
- [ ] Email notifications
- [ ] Push notifications (web)

---

## Medium-Term Goals

### Backend Migration
- [ ] Firestore migration (replace Sheets backend)
  - Better scalability
  - Built-in offline persistence
  - Security rules per-user

### Mobile Experience
- [ ] Mobile app v1 (Capacitor wrap)
- [ ] iOS/Android widgets
- [ ] Biometric unlock

### Analytics
- [ ] Basic analytics dashboard
- [ ] Monthly spending trends
- [ ] Category breakdown charts

---

## Long-Term Vision

### Smart Features
- [ ] Bank sync (Plaid integration)
- [ ] AI-powered categorization
- [ ] Spending predictions
- [ ] Bill negotiation prompts

### Multi-User
- [ ] Family/shared accounts
- [ ] "Who owes who" tracking
- [ ] Shared expense splitting

### Monetization (if needed)
- [ ] Freemium tiers
- [ ] Premium features (bank sync, advanced analytics)

---

## Quick Reference

### Current Tech Stack
- **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS (CDN), Lucide Icons
- **Backend**: Google Apps Script (serverless)
- **Storage**: Google Sheets (primary), localStorage (fallback)
- **Authentication**: Firebase Auth with Google OAuth

### File Structure
```
personal-expense-tracker/
├── index.html              # Main HTML page
├── google-apps-script.js   # Backend script
├── css/
│   └── styles.css          # Custom styling
├── js/
│   ├── config.js           # Configuration
│   ├── firebase-auth.js    # Google OAuth
│   ├── i18n.js             # Internationalization
│   ├── sheets-api.js       # API layer
│   └── app.js              # Main application logic
├── README.md
├── SETUP.md
└── RESUME.md
```

---

*Last updated: February 2026*
