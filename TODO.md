# Personal Expense Tracker - Expansion Roadmap

## Vision Statement

A **personal finance tracker** with intelligent automation, cross-platform access, and seamless user experience.

---

## Current State (v1.1.2)

- **Setup wizard** - 8-step onboarding for new users with feature tour, pay schedule, expenses, goals
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

### Phase 1: Foundation Components
- [x] **1. Icon picker grid** - Replace text input for icons with visual emoji grid:
  - Reference implementation: `/hours-worked-tracker` icon picker
  - Grid popup with 30+ common emoji options
  - Click to select, click outside to close
  - Reusable component for Settings + Wizard + Mini-wizards

- [x] **2. Credit Card expense type** - Add new type to config:
  - Required inputs: Current balance, Payment due date, Minimum amount due
  - Optional inputs: Interest rate (APR), Credit limit, Billing cycle close date

- [x] **3. Unique expense names** - Validation logic:
  - Require unique names for each expense
  - Prevent duplicates on save
  - e.g., "Chase Sapphire" vs "Amex Gold" for credit cards

### Phase 2: Mini-Wizard System
- [x] **4. Mini-wizard framework** - When user selects an expense type in wizard:
  - Show focused sub-wizard to configure that specific expense
  - Type-specific required/optional fields
  - Uses icon picker from Phase 1

- [x] **5. Recurring/Rent mini-wizard** - Configuration options:
  - Required: Name, Amount due, Due day of month, Icon
  - "Already paid this month" checkbox
    - If checked: Card shows "Paid this month" status
    - If unchecked: Show past due ONLY if current day > due day (not equal)
  - Maximum past due capped at 1 month

- [x] **6. Other expense type mini-wizards**:
  - Loan: Name, Amount, Due day, Total payments, Icon
  - Goal: Name, Target amount, Target date, Icon
  - Variable: Name, Typical amount, Due day, Icon
  - Credit Card: All fields from Phase 1 item #2

- [x] **7. "Add another" option** - At bottom of each mini-wizard:
  - Button to add another expense of the same type
  - Clears form, keeps same type selected

### Phase 3: Polish
- [ ] **8. Add i18n translations** - Spanish + Haitian Creole for all new strings

### User Experience
- [x] Onboarding wizard for new users
- [ ] User templates (College Student, Young Professional, etc.)

### Future Expense Types
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
