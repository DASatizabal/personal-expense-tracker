// Configuration for Personal Expense Tracker

const APP_VERSION = '1.2.0';

// Firebase Configuration
// To set up:
// 1. Go to https://console.firebase.google.com
// 2. Create new project: "personal-expense-tracker"
// 3. Enable Google Auth: Authentication > Sign-in method > Google > Enable
// 4. Add authorized domain: your-github-username.github.io
// 5. Get config: Project settings > Your apps > Add web app
// 6. Copy the firebaseConfig values below

// Auth roles
// Primary user: uses the default Google Sheet
// Admin: can access any user's data via a user switcher
const AUTH_ROLES = {
    PRIMARY_USER: '',  // Set to your email to use the default Payments tab
    ADMINS: ['dasatizabal@gmail.com']         // Add admin emails here
};

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCFcvnQzlQUUYTyLENT0dWQBmSFWGSlEsA",
    authDomain: "personal-expense-tracker-c93a6.firebaseapp.com",
    projectId: "personal-expense-tracker-c93a6",
    storageBucket: "personal-expense-tracker-c93a6.firebasestorage.app",
    messagingSenderId: "576147969053",
    appId: "1:576147969053:web:29d8158e6e0710f67f22f4"
};

// Supported currencies
const CURRENCIES = {
    USD: { symbol: '$', code: 'USD', name: 'US Dollar', locale: 'en-US' },
    EUR: { symbol: '€', code: 'EUR', name: 'Euro', locale: 'de-DE' },
    GBP: { symbol: '£', code: 'GBP', name: 'British Pound', locale: 'en-GB' },
    CAD: { symbol: '$', code: 'CAD', name: 'Canadian Dollar', locale: 'en-CA' },
    AUD: { symbol: '$', code: 'AUD', name: 'Australian Dollar', locale: 'en-AU' },
    MXN: { symbol: '$', code: 'MXN', name: 'Mexican Peso', locale: 'es-MX' },
    JPY: { symbol: '¥', code: 'JPY', name: 'Japanese Yen', locale: 'ja-JP' },
    INR: { symbol: '₹', code: 'INR', name: 'Indian Rupee', locale: 'en-IN' },
    BRL: { symbol: 'R$', code: 'BRL', name: 'Brazilian Real', locale: 'pt-BR' },
    CHF: { symbol: 'CHF', code: 'CHF', name: 'Swiss Franc', locale: 'de-CH' }
};

const DEFAULT_CURRENCY = 'USD';

// Pay schedule options for wizard
const PAY_SCHEDULES = {
    weekly: { id: 'weekly', days: 7 },
    biweekly: { id: 'biweekly', days: 14 },
    semimonthly: { id: 'semimonthly', days: 15 },  // Approximate
    monthly: { id: 'monthly', days: 30 }
};

// Common expense templates for wizard quick-add
const EXPENSE_TEMPLATES = [
    { id: 'rent', name: 'Rent/Mortgage', icon: '🏠', type: 'recurring', amount: 1000, dueDay: 1 },
    { id: 'utilities', name: 'Utilities', icon: '💡', type: 'variable', amount: 150, dueDay: 15 },
    { id: 'phone', name: 'Phone', icon: '📱', type: 'recurring', amount: 50, dueDay: 1 },
    { id: 'car', name: 'Car Payment', icon: '🚗', type: 'loan', amount: 300, dueDay: 1, totalPayments: 60 },
    { id: 'insurance', name: 'Insurance', icon: '🛡️', type: 'recurring', amount: 150, dueDay: 15 },
    { id: 'internet', name: 'Internet', icon: '📡', type: 'recurring', amount: 60, dueDay: 1 },
    { id: 'creditcard', name: 'Credit Card', icon: '💳', type: 'creditcard', amount: 50, dueDay: 15, currentBalance: 0, minPayment: 50 }
];

// Common savings goal templates for wizard
const GOAL_TEMPLATES = [
    { id: 'emergency', name: 'Emergency Fund', icon: '🚨', amount: 5000 },
    { id: 'vacation', name: 'Vacation', icon: '🏖️', amount: 2000 },
    { id: 'downpayment', name: 'Down Payment', icon: '🏡', amount: 20000 },
    { id: 'retirement', name: 'Retirement', icon: '👴', amount: 10000 }
];

const CONFIG = {

    // Exchange rate API (Open Exchange Rates)
    EXCHANGE_RATE_URL: 'https://openexchangerates.org/api/latest.json',
    EXCHANGE_RATE_API_KEY: '4df6530bf55348d8a952d0c4c4e4ccd2',
    EXCHANGE_RATE_CACHE_HOURS: 6,  // Refresh rates every 6 hours

    // Google Apps Script URL
    // To set up:
    // 1. Create a Google Sheet with a "Payments" tab
    // 2. Add headers: Date | Category | Amount | Notes | ID
    // 3. Copy google-apps-script.js to Extensions > Apps Script
    // 4. Update SHEET_ID in the script
    // 5. Deploy as Web app with "Anyone" access
    // 6. Paste the deployment URL below

    APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbw5jgxqjPc3oZfqPQQ47kb1BWHx6ulQkWO9OUDlcObuwpZdP2L5OEOk4EyJLio9jwET/exec',

    // Set to true to use localStorage only (offline mode)
    USE_LOCAL_STORAGE: false
};

// Example expense categories - customize these for your needs
const EXPENSES = [
    {
        id: 'rent',
        name: 'Rent',
        icon: '\u{1F3E0}',
        amount: 1000,
        type: 'recurring',
        dueDay: 1,
        description: 'Monthly rent payment'
    },
    {
        id: 'utilities',
        name: 'Utilities',
        icon: '\u{1F4A1}',
        amount: 150,
        type: 'variable',
        dueDay: 15,
        description: 'Electric, water, gas (varies by usage)'
    },
    {
        id: 'phone',
        name: 'Phone',
        icon: '\u{1F4F1}',
        amount: 50,
        type: 'recurring',
        dueDay: 1,
        description: 'Monthly phone bill'
    },
    {
        id: 'car',
        name: 'Car Payment',
        icon: '\u{1F697}',
        amount: 300,
        type: 'loan',
        dueDay: 1,
        totalPayments: 60,
        description: 'Car loan - 60 months'
    },
    {
        id: 'savings',
        name: 'Emergency Fund',
        icon: '\u{1F4B0}',
        amount: 5000,
        type: 'goal',
        dueDate: new Date(2026, 11, 31),
        description: 'Emergency savings goal'
    },
    {
        id: 'creditcard',
        name: 'Credit Card',
        icon: '\u{1F4B3}',
        amount: 50,
        type: 'creditcard',
        dueDay: 15,
        currentBalance: 1500,
        minPayment: 50,
        creditLimit: 5000,
        interestRate: 19.99,
        billingCloseDay: 25,
        description: 'Credit card payment'
    }
];

// Calculate total monthly expenses (recurring + loan + variable + creditcard payments)
const MONTHLY_TOTAL = EXPENSES
    .filter(e => e.type === 'recurring' || e.type === 'loan' || e.type === 'variable' || e.type === 'creditcard')
    .reduce((sum, e) => sum + e.amount, 0);
