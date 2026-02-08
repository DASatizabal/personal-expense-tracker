# Personal Expense Tracker - Project Resume

**Current Version: 1.1.0**

---

## What This Project Is

A mobile-friendly expense tracker for managing:
- **Recurring bills**: Rent, Insurance, Phone, etc.
- **Loans**: Car payments, student loans (tracks payment count)
- **Savings goals**: Vacation funds, emergency savings (with target dates)

Data can sync to Google Sheets for cloud persistence, or work offline with localStorage.

---

## Current State

### Working Features
- **Real-time currency conversion** - fetches live exchange rates, converts amounts when display currency differs
- **User admin panel** - settings gear icon, add/edit/delete expenses, default currency setting
- **Variable expense type** - for bills that change monthly (e.g., Electric)
- **Internationalization (i18n)** - full translation system with English, Spanish, and Haitian Creole
- **Language selector** - switch languages with browser auto-detection
- **Sync status indicator** - shows synced/syncing/offline status in real-time
- **Edit payments** - modify existing payments (amount, date, notes)
- **CSV export** - export payment history to CSV file
- **Currency selector** - 10 currencies (USD, EUR, GBP, etc.)
- **PWA support** - installable app with service worker for offline caching
- **Dark/Light theme toggle** with system preference detection
- **Google OAuth** via Firebase Authentication (optional)
- **Per-user data isolation** with multi-tenant Apps Script
- Dark/light glassmorphism UI with Tailwind CSS and Lucide icons
- Expense cards with status indicators (paid, due soon, overdue, pending)
- Single payment modal with custom amounts and notes
- Bulk payment modal to mark multiple expenses paid at once
- Payment history with delete functionality
- Smart sorting (unpaid first, by due date, by amount)
- Per-paycheck savings breakdown for goals
- Currency formatting with comma separators
- Progress bars for loans and savings goals
- Toast notifications for user feedback

---

## Project Structure

```
personal-expense-tracker/
├── index.html              # Main page
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for offline caching
├── google-apps-script.js   # Backend (copy to Google Apps Script)
├── css/styles.css          # Styling
├── js/
│   ├── config.js           # Settings + expense definitions + Firebase config
│   ├── firebase-auth.js    # Google OAuth via Firebase Authentication
│   ├── i18n.js             # Internationalization (English, Spanish, Haitian Creole)
│   ├── sheets-api.js       # API layer (cloud + localStorage + per-user storage)
│   └── app.js              # UI logic + Firebase auth flow
├── icons/                  # PWA icons (192, 512, maskable)
├── README.md               # Full documentation
├── SETUP.md                # Google Sheets setup guide
├── RESUME.md               # This file
└── TODO.md                 # Expansion roadmap
```

---

## Key Configuration

**js/config.js** contains:
```javascript
APP_VERSION: '1.0.0'
FIREBASE_CONFIG: { ... }  // Set your Firebase config
AUTH_ROLES: {
    PRIMARY_USER: '',     // Set to your email
    ADMINS: []
}
APPS_SCRIPT_URL: 'YOUR_APPS_SCRIPT_URL_HERE'
USE_LOCAL_STORAGE: true   // true = offline only, false = sync to Sheets
```

---

## How It Works

```
User clicks "Mark as Paid"
        ↓
js/app.js calls SheetsAPI.savePayment()
        ↓
js/sheets-api.js POSTs to Apps Script URL (or saves to localStorage)
        ↓
google-apps-script.js adds row to Google Sheet
        ↓
Response returns, UI updates
```

---

## Development Notes

**IMPORTANT: Date handling rules**
- Use `new Date(year, month, day)` (month is 0-indexed) - NOT `new Date('YYYY-MM-DD')`
- `new Date('2026-07-23')` creates UTC midnight, which becomes the PREVIOUS day in US timezones
- Use `getTodayDateString()` helper for form date fields
- Use `parseLocalDate()` to parse "YYYY-MM-DD" strings from storage

---

## To Make Changes

### Edit expenses (amounts, due dates):
Edit `js/config.js` → `EXPENSES` array

### Edit app behavior:
Edit `js/app.js`

### Edit backend/API:
1. Edit `google-apps-script.js`
2. Copy to Google Apps Script editor
3. **Redeploy** (new version required for changes to take effect)

---

## Troubleshooting

**Payments not saving to Sheet:**
- Check browser console (F12) for errors
- Verify Apps Script is deployed with "Anyone" access
- Redeploy Apps Script: Deploy > Manage deployments > Edit (pencil) > New version > Deploy

**CORS errors in console:**
- Apps Script uses `text/plain` content type to avoid CORS preflight
- If still occurring, redeploy Apps Script with new version

**Expense not showing as paid:**
- Check that payment date matches current month
- Verify payment was saved (check Payment History section)
- Hard refresh the page

---

## Version History

| Version | Changes |
|---------|---------|
| v1.1.2 | Settings: option to run setup wizard again |
| v1.1.1 | Wizard expenses: toggle selection by clicking again |
| v1.1.0 | **Setup Wizard**: 8-step onboarding wizard for new users with feature tour, pay schedule, currency selection, and expense quick-add |
| v1.0.1 | Configure Firebase Auth and Google Sheets cloud sync |
| v1.0.0 | Initial release - forked from alex-expense-tracker as a general-use personal expense tracker |
