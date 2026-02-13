// Internationalization (i18n) Module for Personal Expense Tracker

const I18n = {
    currentLanguage: 'en',

    // Available languages
    LANGUAGES: {
        en: { code: 'en', name: 'English', nativeName: 'English' },
        es: { code: 'es', name: 'Spanish', nativeName: 'Español' },
        ht: { code: 'ht', name: 'Haitian Creole', nativeName: 'Kreyòl Ayisyen' }
    },

    // Translations organized by key category
    translations: {
        en: {
            // App header
            'app.title': "Personal Expense Tracker",
            'app.subtitle': 'Track expenses, manage payments, reach your goals',

            // Summary section
            'summary.remaining': 'Remaining This Month',
            'summary.nextDue': 'Next Due',
            'summary.allPaid': 'All paid!',
            'summary.today': '(Today!)',
            'summary.overdue': '(Overdue!)',
            'summary.pastDue': '(Past Due!)',
            'summary.inDays_one': '(in {{count}} day)',
            'summary.inDays_other': '(in {{count}} days)',

            // Buttons
            'button.bulkPayment': 'Bulk Payment',
            'button.markAsPaid': 'Mark as Paid',
            'button.addToSavings': 'Add to Savings',
            'button.savePayment': 'Save Payment',
            'button.paySelected': 'Pay Selected',
            'button.unlock': 'Unlock',
            'button.createPassword': 'Create Password',
            'button.cancel': 'Cancel',
            'button.reset': 'Reset',
            'button.export': 'Export',

            // Labels
            'label.amount': 'Amount',
            'label.date': 'Date',
            'label.paymentDate': 'Payment Date',
            'label.notes': 'Notes (optional)',
            'label.password': 'Password',
            'label.confirmPassword': 'Confirm Password',
            'label.selectExpenses': 'Select Expenses to Pay',

            // Placeholders
            'placeholder.notes': 'e.g., Paid to Mom, Paid to David, etc.',
            'placeholder.bulkNotes': 'Paid to Mom, Paid to David, etc.',
            'placeholder.password': 'Enter password',
            'placeholder.confirmPassword': 'Confirm password',

            // Modal titles
            'modal.recordPayment': 'Record Payment',
            'modal.recordPaymentFor': 'Record {{name}} Payment',
            'modal.addToSavings': 'Add to {{name}} Savings',
            'modal.editPayment': 'Edit Payment',
            'modal.editPaymentFor': 'Edit {{name}} Payment',
            'modal.bulkPayment': 'Bulk Payment',
            'modal.unlockApp': 'Unlock App',
            'modal.createPassword': 'Create Password',
            'modal.resetData': 'Reset App Data?',

            // Modal subtitles
            'modal.unlockSubtitle': 'Enter your password to continue',
            'modal.createPasswordSubtitle': 'Set a password to protect your data',
            'modal.resetSubtitle': 'This will delete all local payment data and password. Cloud data (Google Sheets) will remain safe.',

            // Status labels
            'status.paid': 'Paid this month',
            'status.paidPayperiod': 'Paid this payperiod',
            'status.goalReached': 'Goal Reached!',
            'status.paidOff': 'Paid Off!',
            'status.overdue': 'Overdue!',
            'status.pastDue': 'Past Due!',
            'status.dueToday': 'Due today',
            'status.dueSoon_one': 'Due in {{count}} day',
            'status.dueSoon_other': 'Due in {{count}} days',
            'status.daysLeft_one': '{{count}} day left',
            'status.daysLeft_other': '{{count}} days left',
            'status.dueOnThe': 'Due on the {{ordinal}} of month',

            // Sync indicator
            'sync.synced': 'Synced',
            'sync.syncing': 'Syncing...',
            'sync.offline': 'Offline',
            'sync.error': 'Sync Error',
            'sync.unknown': 'Unknown',
            'sync.lastSynced': 'Last synced: {{time}}',

            // Toast notifications
            'toast.paymentSaved': 'Payment saved successfully!',
            'toast.paymentUpdated': 'Payment updated successfully!',
            'toast.paymentDeleted': 'Payment deleted',
            'toast.paymentsFailed': 'Failed to save payment',
            'toast.loadFailed': 'Failed to load data',
            'toast.currencyChanged': 'Currency changed to {{currency}}',
            'toast.languageChanged': 'Language changed to {{language}}',
            'toast.passwordCreated': 'Password created successfully!',
            'toast.welcomeBack': 'Welcome back!',
            'toast.incorrectPassword': 'Incorrect password',
            'toast.noPasswordFound': 'No password found',
            'toast.setupFailed': 'Failed to set up password',
            'toast.passwordTooShort': 'Password must be at least 4 characters',
            'toast.passwordsMismatch': 'Passwords do not match',
            'toast.dataCleared': 'Data cleared. Create a new password.',
            'toast.selectExpense': 'Please select at least one expense',
            'toast.invalidAmount': 'Please enter a valid amount',
            'toast.invalidAmountFor': 'Invalid amount for {{name}}',
            'toast.exceedsBalance': 'Amount exceeds remaining balance ({{amount}})',
            'toast.paymentsExported': 'Payments exported to CSV',
            'toast.bulkPaymentsSaved_one': '{{count}} payment saved!',
            'toast.bulkPaymentsSaved_other': '{{count}} payments saved!',

            // Progress text
            'progress.paymentsOf': '{{current}} of {{total}} payments',
            'progress.savedOf': '{{saved}} of {{total}}',
            'progress.paychecksLeft': '{{count}} paychecks left',
            'progress.perPaycheck': '{{amount}}/paycheck',
            'progress.remaining': '{{amount}} remaining',

            // Expense card text
            'expense.perMonth': '{{amount}}/month',
            'expense.estimated': '~{{amount}}/month',
            'expense.average': 'Avg: {{amount}}',
            'expense.noHistory': 'No history yet',
            'expense.avgHint': 'Last 3-month avg: {{amount}}',
            'expense.estimatedHint': 'Estimated: {{amount}}',
            'expense.trend.up': '↑',
            'expense.trend.down': '↓',
            'expense.trend.stable': '≈',
            'expense.total': '{{amount}} total',
            'expense.dueDate': 'Due: {{date}}',
            'expense.dueDay': 'Due: {{ordinal}} of month',
            'expense.credit': '{{amount}} Credit',
            'expense.pastDue': '{{amount}} Past Due!',
            'status.variableDue': 'Variable - due {{ordinal}}',

            // Payment history
            'history.title': 'Recent Payments',
            'history.noPayments': 'No payments recorded yet',
            'history.editPayment': 'Edit payment',
            'history.deletePayment': 'Delete payment',

            // Confirmation dialogs
            'confirm.deletePayment': 'Are you sure you want to delete this payment?',
            'confirm.forgotPassword': 'Forgot password? Reset app data',

            // Loading
            'loading.text': 'Loading...',

            // CSV export headers
            'csv.date': 'Date',
            'csv.category': 'Category',
            'csv.amount': 'Amount',
            'csv.notes': 'Notes',
            'csv.id': 'ID',

            // Tooltips
            'tooltip.syncStatus': 'Sync status',
            'tooltip.selectCurrency': 'Select currency',
            'tooltip.selectLanguage': 'Select language',
            'tooltip.toggleTheme': 'Toggle theme',
            'tooltip.signOut': 'Sign out',
            'tooltip.exportCSV': 'Export to CSV',
            'tooltip.settings': 'Settings',

            // Authentication
            'auth.subtitle': 'Sign in to access your expenses',
            'auth.signInWithGoogle': 'Sign in with Google',
            'auth.signOut': 'Sign Out',
            'auth.privacyNote': 'Your data stays private and syncs to your own Google Sheet',
            'auth.popupBlocked': 'Popup blocked. Please allow popups for this site.',
            'auth.signInFailed': 'Sign-in failed. Please try again.',
            'auth.signOutFailed': 'Sign-out failed. Please try again.',
            'toast.signedOut': 'Signed out successfully',

            // Setup wizard
            'setup.welcomeTitle': 'Welcome!',
            'setup.greeting': 'Nice to meet you, {{name}}',
            'setup.intro': 'To sync your expenses to Google Sheets, you\'ll need to set up your own sheet:',
            'setup.step1': 'Create a new Google Sheet',
            'setup.step2': 'Add a "Payments" tab with headers: Date, Category, Amount, Notes, ID',
            'setup.step3': 'Copy the Apps Script code from SETUP.md',
            'setup.step4': 'Deploy and paste the URL in Settings',
            'setup.skipNote': 'You can skip this and use offline mode - your data will be stored locally.',
            'setup.setupLater': 'Set Up Later',
            'setup.continue': 'Continue',
            'setup.usingOffline': 'Using offline mode. Your data is stored locally.',

            // Settings
            'settings.title': 'Settings',
            'settings.sheetsUrl': 'Google Sheets URL',
            'settings.sheetsUrlPlaceholder': 'https://script.google.com/macros/s/...',
            'settings.sheetsUrlHint': 'Your Apps Script deployment URL for syncing',
            'toast.sheetsUrlSaved': 'Google Sheets URL saved',
            'toast.sheetsUrlCleared': 'Google Sheets URL cleared (using offline mode)',
            'settings.defaultCurrency': 'Default Currency',
            'settings.currencyHint': 'All expenses are stored in this currency',
            'settings.manageExpenses': 'Manage Expenses',
            'settings.addExpense': 'Add Expense',
            'settings.editExpense': 'Edit Expense',
            'settings.expenseName': 'Name',
            'settings.expenseNamePlaceholder': 'e.g., Rent, Phone, etc.',
            'settings.icon': 'Icon',
            'settings.type': 'Type',
            'settings.typeRecurring': 'Monthly Bill',
            'settings.typeLoan': 'Loan',
            'settings.typeGoal': 'Savings Goal',
            'settings.typeVariable': 'Variable',
            'settings.dueDay': 'Due Day',
            'settings.dueDate': 'Due Date',
            'settings.totalPayments': 'Total Payments',
            'settings.saveExpense': 'Save Expense',
            'settings.deleteExpense': 'Delete',
            'settings.confirmDelete': 'Are you sure you want to delete this expense? This will not delete past payments.',
            'settings.setupWizard': 'Setup Wizard',
            'settings.restartWizard': 'Run Setup Wizard Again',
            'settings.restartWizardHint': 'Go through the setup process again to update preferences',
            'settings.typeCreditCard': 'Credit Card',
            'settings.currentBalance': 'Current Balance',
            'settings.minPayment': 'Minimum Payment',
            'settings.creditLimit': 'Credit Limit (optional)',
            'settings.interestRate': 'APR % (optional)',
            'settings.billingCloseDay': 'Billing Close Day (optional)',
            'toast.expenseSaved': 'Expense saved successfully!',
            'toast.expenseDeleted': 'Expense deleted',
            'toast.expenseError': 'Failed to save expense',
            'toast.defaultCurrencyChanged': 'Default currency changed to {{currency}}',

            // Bulk payment
            'bulk.allPaid': 'All expenses are paid and current!',
            'bulk.pastDue': '(Past Due)',

            // Ordinals
            'ordinal.st': 'st',
            'ordinal.nd': 'nd',
            'ordinal.rd': 'rd',
            'ordinal.th': 'th',

            // Exchange rates
            'rates.lastUpdated': 'Rates: {{date}}',
            'rates.offline': 'Rates: Cached',
            'rates.unavailable': 'Rates unavailable',
            'toast.ratesFetched': 'Exchange rates updated',
            'toast.ratesFetchFailed': 'Using cached exchange rates',
            'tooltip.rateStatus': 'Exchange rates last updated',

            // Setup Wizard - Step 1: Welcome
            'wizard.welcome.title': 'Welcome, {{name}}!',
            'wizard.welcome.subtitle': "Let's get your expense tracker set up",
            'wizard.welcome.description': "We'll walk you through a few quick steps to personalize your experience and help you start tracking your expenses right away.",
            'wizard.welcome.start': "Let's Get Started",

            // Setup Wizard - Step 2: Expense Types
            'wizard.types.title': 'Track Different Types of Expenses',
            'wizard.types.subtitle': 'Four powerful ways to manage your money',
            'wizard.types.recurring.title': 'Monthly Bills',
            'wizard.types.recurring.description': 'Regular expenses like rent, insurance, and subscriptions that repeat each month.',
            'wizard.types.loan.title': 'Loans',
            'wizard.types.loan.description': 'Track payments on car loans, mortgages, or personal loans with payment counters.',
            'wizard.types.goal.title': 'Savings Goals',
            'wizard.types.goal.description': 'Set targets for vacation funds, emergency savings, or big purchases with deadlines.',
            'wizard.types.variable.title': 'Variable Bills',
            'wizard.types.variable.description': 'Expenses that change monthly like utilities, groceries, or gas.',

            // Amount Type toggle (mini-wizard)
            'wizard.amountType.label': 'Amount Type',
            'wizard.amountType.fixed': 'Fixed',
            'wizard.amountType.fixedHint': 'Same every month',
            'wizard.amountType.variable': 'Variable',
            'wizard.amountType.variableHint': 'Changes monthly',
            'wizard.amountType.variableNote': 'The amount you enter is an estimate. The app will track your actual payments and show a 3-month average with trend indicators.',
            'wizard.amountType.estimatedAmount': 'Estimated Amount',

            // Setup Wizard - Step 3: Features
            'wizard.features.title': 'Powerful Features',
            'wizard.features.subtitle': 'Everything you need to stay on top of your finances',
            'wizard.features.sync.title': 'Cloud Sync',
            'wizard.features.sync.description': 'Your data syncs across all devices via Google Sheets',
            'wizard.features.currency.title': 'Multi-Currency',
            'wizard.features.currency.description': 'Support for 10 currencies with real-time conversion',
            'wizard.features.history.title': 'Payment History',
            'wizard.features.history.description': 'Track all payments with dates, notes, and easy editing',
            'wizard.features.bulk.title': 'Bulk Payments',
            'wizard.features.bulk.description': 'Mark multiple expenses as paid in one action',

            // Setup Wizard - Step 4: Pay Schedule
            'wizard.schedule.title': 'Your Pay Schedule',
            'wizard.schedule.subtitle': 'Help us calculate per-paycheck savings amounts',
            'wizard.schedule.frequency': 'How often do you get paid?',
            'wizard.schedule.weekly': 'Weekly',
            'wizard.schedule.biweekly': 'Every 2 Weeks',
            'wizard.schedule.semimonthly': '1st & 15th',
            'wizard.schedule.monthly': 'Monthly',
            'wizard.schedule.nextPayday': 'When is your next payday?',
            'wizard.schedule.optional': '(Optional - can set later in Settings)',

            // Setup Wizard - Step 5: Currency
            'wizard.currency.title': 'Choose Your Currency',
            'wizard.currency.subtitle': 'All your expenses will be tracked in this currency',
            'wizard.currency.hint': 'You can view amounts in other currencies using the converter in the top bar.',

            // Setup Wizard - Step 6: Add Expenses
            'wizard.expenses.title': 'Add Your Expenses',
            'wizard.expenses.subtitle': 'Quick-add common expenses or create custom ones',
            'wizard.expenses.common': 'Common Expenses',
            'wizard.expenses.rent': 'Rent/Mortgage',
            'wizard.expenses.utilities': 'Utilities',
            'wizard.expenses.phone': 'Phone',
            'wizard.expenses.car': 'Car Payment',
            'wizard.expenses.insurance': 'Insurance',
            'wizard.expenses.internet': 'Internet',
            'wizard.expenses.custom': 'Add Custom Expense',
            'wizard.expenses.added': '{{name}} added!',
            'wizard.expenses.yourExpenses': 'Your Expenses',
            'wizard.expenses.none': 'No expenses added yet',

            // Setup Wizard - Step 7: Savings Goal
            'wizard.goals.title': 'Set a Savings Goal',
            'wizard.goals.subtitle': 'Optional: Start saving for something special',
            'wizard.goals.suggestions': 'Popular Goals',
            'wizard.goals.emergency': 'Emergency Fund',
            'wizard.goals.vacation': 'Vacation',
            'wizard.goals.downpayment': 'Down Payment',
            'wizard.goals.retirement': 'Retirement',
            'wizard.goals.custom': 'Custom Goal',
            'wizard.goals.amount': 'Target Amount',
            'wizard.goals.targetDate': 'Target Date',
            'wizard.goals.perPaycheck': "You'll need to save {{amount}} per paycheck",

            // Setup Wizard - Step 8: Complete
            'wizard.complete.title': "You're All Set!",
            'wizard.complete.subtitle': 'Your expense tracker is ready to use',
            'wizard.complete.summary': 'Setup Summary',
            'wizard.complete.expenses': '{{count}} expenses added',
            'wizard.complete.currency': 'Currency: {{currency}}',
            'wizard.complete.schedule': 'Pay schedule: {{schedule}}',
            'wizard.complete.tip': 'Tip: Use the Bulk Payment button to quickly mark multiple expenses as paid on payday!',
            'wizard.complete.dashboard': 'Go to Dashboard',

            // Wizard Navigation
            'wizard.next': 'Next',
            'wizard.back': 'Back',
            'wizard.skip': 'Skip',
            'wizard.stepOf': 'Step {{current}} of {{total}}'
        },

        // Spanish translations
        es: {
            // App header
            'app.title': 'Rastreador de Gastos Personal',
            'app.subtitle': 'Rastrea gastos, administra pagos, alcanza tus metas',

            // Summary section
            'summary.remaining': 'Restante Este Mes',
            'summary.nextDue': 'Próximo Vencimiento',
            'summary.allPaid': '¡Todo pagado!',
            'summary.today': '(¡Hoy!)',
            'summary.overdue': '(¡Vencido!)',
            'summary.pastDue': '(¡Atrasado!)',
            'summary.inDays_one': '(en {{count}} día)',
            'summary.inDays_other': '(en {{count}} días)',

            // Buttons
            'button.bulkPayment': 'Pago Múltiple',
            'button.markAsPaid': 'Marcar como Pagado',
            'button.addToSavings': 'Agregar a Ahorros',
            'button.savePayment': 'Guardar Pago',
            'button.paySelected': 'Pagar Seleccionados',
            'button.unlock': 'Desbloquear',
            'button.createPassword': 'Crear Contraseña',
            'button.cancel': 'Cancelar',
            'button.reset': 'Restablecer',
            'button.export': 'Exportar',

            // Labels
            'label.amount': 'Monto',
            'label.date': 'Fecha',
            'label.paymentDate': 'Fecha de Pago',
            'label.notes': 'Notas (opcional)',
            'label.password': 'Contraseña',
            'label.confirmPassword': 'Confirmar Contraseña',
            'label.selectExpenses': 'Seleccionar Gastos a Pagar',

            // Placeholders
            'placeholder.notes': 'ej., Pagado a Mamá, Pagado a David, etc.',
            'placeholder.bulkNotes': 'Pagado a Mamá, Pagado a David, etc.',
            'placeholder.password': 'Ingresa contraseña',
            'placeholder.confirmPassword': 'Confirmar contraseña',

            // Modal titles
            'modal.recordPayment': 'Registrar Pago',
            'modal.recordPaymentFor': 'Registrar Pago de {{name}}',
            'modal.addToSavings': 'Agregar a Ahorros de {{name}}',
            'modal.editPayment': 'Editar Pago',
            'modal.editPaymentFor': 'Editar Pago de {{name}}',
            'modal.bulkPayment': 'Pago Múltiple',
            'modal.unlockApp': 'Desbloquear App',
            'modal.createPassword': 'Crear Contraseña',
            'modal.resetData': '¿Restablecer Datos?',

            // Modal subtitles
            'modal.unlockSubtitle': 'Ingresa tu contraseña para continuar',
            'modal.createPasswordSubtitle': 'Establece una contraseña para proteger tus datos',
            'modal.resetSubtitle': 'Esto eliminará todos los datos locales y la contraseña. Los datos en la nube (Google Sheets) permanecerán seguros.',

            // Status labels
            'status.paid': 'Pagado este mes',
            'status.paidPayperiod': 'Pagado este período',
            'status.goalReached': '¡Meta Alcanzada!',
            'status.paidOff': '¡Pagado!',
            'status.overdue': '¡Vencido!',
            'status.pastDue': '¡Atrasado!',
            'status.dueToday': 'Vence hoy',
            'status.dueSoon_one': 'Vence en {{count}} día',
            'status.dueSoon_other': 'Vence en {{count}} días',
            'status.daysLeft_one': '{{count}} día restante',
            'status.daysLeft_other': '{{count}} días restantes',
            'status.dueOnThe': 'Vence el {{ordinal}} del mes',

            // Sync indicator
            'sync.synced': 'Sincronizado',
            'sync.syncing': 'Sincronizando...',
            'sync.offline': 'Sin conexión',
            'sync.error': 'Error de Sync',
            'sync.unknown': 'Desconocido',
            'sync.lastSynced': 'Última sync: {{time}}',

            // Toast notifications
            'toast.paymentSaved': '¡Pago guardado exitosamente!',
            'toast.paymentUpdated': '¡Pago actualizado exitosamente!',
            'toast.paymentDeleted': 'Pago eliminado',
            'toast.paymentsFailed': 'Error al guardar pago',
            'toast.loadFailed': 'Error al cargar datos',
            'toast.currencyChanged': 'Moneda cambiada a {{currency}}',
            'toast.languageChanged': 'Idioma cambiado a {{language}}',
            'toast.passwordCreated': '¡Contraseña creada exitosamente!',
            'toast.welcomeBack': '¡Bienvenido de nuevo!',
            'toast.incorrectPassword': 'Contraseña incorrecta',
            'toast.noPasswordFound': 'No se encontró contraseña',
            'toast.setupFailed': 'Error al configurar contraseña',
            'toast.passwordTooShort': 'La contraseña debe tener al menos 4 caracteres',
            'toast.passwordsMismatch': 'Las contraseñas no coinciden',
            'toast.dataCleared': 'Datos eliminados. Crea una nueva contraseña.',
            'toast.selectExpense': 'Por favor selecciona al menos un gasto',
            'toast.invalidAmount': 'Por favor ingresa un monto válido',
            'toast.invalidAmountFor': 'Monto inválido para {{name}}',
            'toast.exceedsBalance': 'El monto excede el balance restante ({{amount}})',
            'toast.paymentsExported': 'Pagos exportados a CSV',
            'toast.bulkPaymentsSaved_one': '¡{{count}} pago guardado!',
            'toast.bulkPaymentsSaved_other': '¡{{count}} pagos guardados!',

            // Progress text
            'progress.paymentsOf': '{{current}} de {{total}} pagos',
            'progress.savedOf': '{{saved}} de {{total}}',
            'progress.paychecksLeft': '{{count}} cheques restantes',
            'progress.perPaycheck': '{{amount}}/cheque',
            'progress.remaining': '{{amount}} restante',

            // Expense card text
            'expense.perMonth': '{{amount}}/mes',
            'expense.estimated': '~{{amount}}/mes',
            'expense.average': 'Prom: {{amount}}',
            'expense.noHistory': 'Sin historial',
            'expense.avgHint': 'Promedio últimos 3 meses: {{amount}}',
            'expense.estimatedHint': 'Estimado: {{amount}}',
            'expense.trend.up': '↑',
            'expense.trend.down': '↓',
            'expense.trend.stable': '≈',
            'expense.total': '{{amount}} total',
            'expense.dueDate': 'Vence: {{date}}',
            'expense.dueDay': 'Vence: {{ordinal}} del mes',
            'expense.credit': '{{amount}} Crédito',
            'expense.pastDue': '¡{{amount}} Atrasado!',
            'status.variableDue': 'Variable - vence {{ordinal}}',

            // Payment history
            'history.title': 'Pagos Recientes',
            'history.noPayments': 'No hay pagos registrados',
            'history.editPayment': 'Editar pago',
            'history.deletePayment': 'Eliminar pago',

            // Confirmation dialogs
            'confirm.deletePayment': '¿Estás seguro de que deseas eliminar este pago?',
            'confirm.forgotPassword': '¿Olvidaste tu contraseña? Restablecer datos',

            // Loading
            'loading.text': 'Cargando...',

            // CSV export headers
            'csv.date': 'Fecha',
            'csv.category': 'Categoría',
            'csv.amount': 'Monto',
            'csv.notes': 'Notas',
            'csv.id': 'ID',

            // Tooltips
            'tooltip.syncStatus': 'Estado de sincronización',
            'tooltip.selectCurrency': 'Seleccionar moneda',
            'tooltip.selectLanguage': 'Seleccionar idioma',
            'tooltip.toggleTheme': 'Cambiar tema',
            'tooltip.signOut': 'Cerrar sesión',
            'tooltip.exportCSV': 'Exportar a CSV',
            'tooltip.settings': 'Configuración',

            // Authentication
            'auth.subtitle': 'Inicia sesión para acceder a tus gastos',
            'auth.signInWithGoogle': 'Iniciar sesión con Google',
            'auth.signOut': 'Cerrar Sesión',
            'auth.privacyNote': 'Tus datos permanecen privados y se sincronizan con tu propia Hoja de Google',
            'auth.popupBlocked': 'Ventana emergente bloqueada. Por favor permite ventanas emergentes.',
            'auth.signInFailed': 'Error al iniciar sesión. Intenta de nuevo.',
            'auth.signOutFailed': 'Error al cerrar sesión. Intenta de nuevo.',
            'toast.signedOut': 'Sesión cerrada exitosamente',

            // Setup wizard
            'setup.welcomeTitle': '¡Bienvenido!',
            'setup.greeting': 'Mucho gusto, {{name}}',
            'setup.intro': 'Para sincronizar tus gastos con Google Sheets, necesitas configurar tu propia hoja:',
            'setup.step1': 'Crea una nueva Hoja de Google',
            'setup.step2': 'Agrega una pestaña "Payments" con encabezados: Date, Category, Amount, Notes, ID',
            'setup.step3': 'Copia el código de Apps Script de SETUP.md',
            'setup.step4': 'Despliega y pega la URL en Configuración',
            'setup.skipNote': 'Puedes omitir esto y usar modo sin conexión - tus datos se guardarán localmente.',
            'setup.setupLater': 'Configurar Después',
            'setup.continue': 'Continuar',
            'setup.usingOffline': 'Usando modo sin conexión. Tus datos se guardan localmente.',

            // Settings
            'settings.title': 'Configuración',
            'settings.sheetsUrl': 'URL de Google Sheets',
            'settings.sheetsUrlPlaceholder': 'https://script.google.com/macros/s/...',
            'settings.sheetsUrlHint': 'URL de despliegue de Apps Script para sincronizar',
            'toast.sheetsUrlSaved': 'URL de Google Sheets guardada',
            'toast.sheetsUrlCleared': 'URL de Google Sheets eliminada (usando modo sin conexión)',
            'settings.defaultCurrency': 'Moneda Predeterminada',
            'settings.currencyHint': 'Todos los gastos se guardan en esta moneda',
            'settings.manageExpenses': 'Administrar Gastos',
            'settings.addExpense': 'Agregar Gasto',
            'settings.editExpense': 'Editar Gasto',
            'settings.expenseName': 'Nombre',
            'settings.expenseNamePlaceholder': 'ej., Alquiler, Teléfono, etc.',
            'settings.icon': 'Ícono',
            'settings.type': 'Tipo',
            'settings.typeRecurring': 'Factura Mensual',
            'settings.typeLoan': 'Préstamo',
            'settings.typeGoal': 'Meta de Ahorro',
            'settings.typeVariable': 'Variable',
            'settings.dueDay': 'Día de Vencimiento',
            'settings.dueDate': 'Fecha de Vencimiento',
            'settings.totalPayments': 'Total de Pagos',
            'settings.saveExpense': 'Guardar Gasto',
            'settings.deleteExpense': 'Eliminar',
            'settings.confirmDelete': '¿Estás seguro de que deseas eliminar este gasto? Esto no eliminará los pagos anteriores.',
            'settings.setupWizard': 'Asistente de Configuración',
            'settings.restartWizard': 'Ejecutar Asistente Otra Vez',
            'settings.restartWizardHint': 'Pasa por el proceso de configuración nuevamente para actualizar preferencias',
            'toast.expenseSaved': '¡Gasto guardado exitosamente!',
            'toast.expenseDeleted': 'Gasto eliminado',
            'toast.expenseError': 'Error al guardar gasto',
            'toast.defaultCurrencyChanged': 'Moneda predeterminada cambiada a {{currency}}',

            // Bulk payment
            'bulk.allPaid': '¡Todos los gastos están pagados y al día!',
            'bulk.pastDue': '(Atrasado)',

            // Ordinals (Spanish uses º for all)
            'ordinal.st': 'º',
            'ordinal.nd': 'º',
            'ordinal.rd': 'º',
            'ordinal.th': 'º',

            // Exchange rates
            'rates.lastUpdated': 'Tasas: {{date}}',
            'rates.offline': 'Tasas: En caché',
            'rates.unavailable': 'Tasas no disponibles',
            'toast.ratesFetched': 'Tasas de cambio actualizadas',
            'toast.ratesFetchFailed': 'Usando tasas de cambio en caché',
            'tooltip.rateStatus': 'Última actualización de tasas',

            // Setup Wizard - Step 1: Welcome
            'wizard.welcome.title': '¡Bienvenido, {{name}}!',
            'wizard.welcome.subtitle': 'Configuremos tu rastreador de gastos',
            'wizard.welcome.description': 'Te guiaremos a través de unos pasos rápidos para personalizar tu experiencia y ayudarte a comenzar a rastrear tus gastos.',
            'wizard.welcome.start': 'Comenzar',

            // Setup Wizard - Step 2: Expense Types
            'wizard.types.title': 'Rastrea Diferentes Tipos de Gastos',
            'wizard.types.subtitle': 'Cuatro formas poderosas de administrar tu dinero',
            'wizard.types.recurring.title': 'Facturas Mensuales',
            'wizard.types.recurring.description': 'Gastos regulares como alquiler, seguro y suscripciones que se repiten cada mes.',
            'wizard.types.loan.title': 'Préstamos',
            'wizard.types.loan.description': 'Rastrea pagos de préstamos de auto, hipotecas o préstamos personales con contadores.',
            'wizard.types.goal.title': 'Metas de Ahorro',
            'wizard.types.goal.description': 'Establece objetivos para vacaciones, ahorros de emergencia o compras grandes con fechas límite.',
            'wizard.types.variable.title': 'Facturas Variables',
            'wizard.types.variable.description': 'Gastos que cambian mensualmente como servicios, comida o gasolina.',

            // Amount Type toggle (mini-wizard)
            'wizard.amountType.label': 'Tipo de Monto',
            'wizard.amountType.fixed': 'Fijo',
            'wizard.amountType.fixedHint': 'Igual cada mes',
            'wizard.amountType.variable': 'Variable',
            'wizard.amountType.variableHint': 'Cambia mensualmente',
            'wizard.amountType.variableNote': 'El monto que ingreses es un estimado. La app rastreará tus pagos reales y mostrará un promedio de 3 meses con indicadores de tendencia.',
            'wizard.amountType.estimatedAmount': 'Monto Estimado',

            // Setup Wizard - Step 3: Features
            'wizard.features.title': 'Funciones Poderosas',
            'wizard.features.subtitle': 'Todo lo que necesitas para controlar tus finanzas',
            'wizard.features.sync.title': 'Sincronización en la Nube',
            'wizard.features.sync.description': 'Tus datos se sincronizan en todos tus dispositivos via Google Sheets',
            'wizard.features.currency.title': 'Multi-Moneda',
            'wizard.features.currency.description': 'Soporte para 10 monedas con conversión en tiempo real',
            'wizard.features.history.title': 'Historial de Pagos',
            'wizard.features.history.description': 'Rastrea todos los pagos con fechas, notas y edición fácil',
            'wizard.features.bulk.title': 'Pagos Múltiples',
            'wizard.features.bulk.description': 'Marca múltiples gastos como pagados en una acción',

            // Setup Wizard - Step 4: Pay Schedule
            'wizard.schedule.title': 'Tu Calendario de Pago',
            'wizard.schedule.subtitle': 'Ayúdanos a calcular los montos de ahorro por cheque',
            'wizard.schedule.frequency': '¿Con qué frecuencia te pagan?',
            'wizard.schedule.weekly': 'Semanal',
            'wizard.schedule.biweekly': 'Cada 2 Semanas',
            'wizard.schedule.semimonthly': '1ro y 15',
            'wizard.schedule.monthly': 'Mensual',
            'wizard.schedule.nextPayday': '¿Cuándo es tu próximo día de pago?',
            'wizard.schedule.optional': '(Opcional - puedes configurar después en Ajustes)',

            // Setup Wizard - Step 5: Currency
            'wizard.currency.title': 'Elige Tu Moneda',
            'wizard.currency.subtitle': 'Todos tus gastos se rastrearán en esta moneda',
            'wizard.currency.hint': 'Puedes ver montos en otras monedas usando el convertidor en la barra superior.',

            // Setup Wizard - Step 6: Add Expenses
            'wizard.expenses.title': 'Agrega Tus Gastos',
            'wizard.expenses.subtitle': 'Agrega gastos comunes rápidamente o crea personalizados',
            'wizard.expenses.common': 'Gastos Comunes',
            'wizard.expenses.rent': 'Alquiler/Hipoteca',
            'wizard.expenses.utilities': 'Servicios',
            'wizard.expenses.phone': 'Teléfono',
            'wizard.expenses.car': 'Pago de Auto',
            'wizard.expenses.insurance': 'Seguro',
            'wizard.expenses.internet': 'Internet',
            'wizard.expenses.custom': 'Agregar Gasto Personalizado',
            'wizard.expenses.added': '¡{{name}} agregado!',
            'wizard.expenses.yourExpenses': 'Tus Gastos',
            'wizard.expenses.none': 'No hay gastos agregados aún',

            // Setup Wizard - Step 7: Savings Goal
            'wizard.goals.title': 'Establece una Meta de Ahorro',
            'wizard.goals.subtitle': 'Opcional: Comienza a ahorrar para algo especial',
            'wizard.goals.suggestions': 'Metas Populares',
            'wizard.goals.emergency': 'Fondo de Emergencia',
            'wizard.goals.vacation': 'Vacaciones',
            'wizard.goals.downpayment': 'Enganche',
            'wizard.goals.retirement': 'Jubilación',
            'wizard.goals.custom': 'Meta Personalizada',
            'wizard.goals.amount': 'Monto Objetivo',
            'wizard.goals.targetDate': 'Fecha Objetivo',
            'wizard.goals.perPaycheck': 'Necesitarás ahorrar {{amount}} por cheque',

            // Setup Wizard - Step 8: Complete
            'wizard.complete.title': '¡Todo Listo!',
            'wizard.complete.subtitle': 'Tu rastreador de gastos está listo para usar',
            'wizard.complete.summary': 'Resumen de Configuración',
            'wizard.complete.expenses': '{{count}} gastos agregados',
            'wizard.complete.currency': 'Moneda: {{currency}}',
            'wizard.complete.schedule': 'Calendario de pago: {{schedule}}',
            'wizard.complete.tip': '¡Consejo: Usa el botón de Pago Múltiple para marcar varios gastos como pagados el día de pago!',
            'wizard.complete.dashboard': 'Ir al Panel',

            // Wizard Navigation
            'wizard.next': 'Siguiente',
            'wizard.back': 'Atrás',
            'wizard.skip': 'Omitir',
            'wizard.stepOf': 'Paso {{current}} de {{total}}'
        },

        // Haitian Creole translations
        ht: {
            // App header
            'app.title': 'Trackè Depans Pèsonèl',
            'app.subtitle': 'Swiv depans, jere peman, atenn objektif ou',

            // Summary section
            'summary.remaining': 'Rès Mwa Sa',
            'summary.nextDue': 'Pwochen Dèt',
            'summary.allPaid': 'Tout peye!',
            'summary.today': '(Jodi a!)',
            'summary.overdue': '(An reta!)',
            'summary.pastDue': '(An reta!)',
            'summary.inDays_one': '(nan {{count}} jou)',
            'summary.inDays_other': '(nan {{count}} jou)',

            // Buttons
            'button.bulkPayment': 'Peman Miltip',
            'button.markAsPaid': 'Make kòm Peye',
            'button.addToSavings': 'Ajoute nan Epay',
            'button.savePayment': 'Anrejistre Peman',
            'button.paySelected': 'Peye Seleksyon',
            'button.unlock': 'Debloке',
            'button.createPassword': 'Kreye Modpas',
            'button.cancel': 'Anile',
            'button.reset': 'Reyinisyalize',
            'button.export': 'Ekspòte',

            // Labels
            'label.amount': 'Montan',
            'label.date': 'Dat',
            'label.paymentDate': 'Dat Peman',
            'label.notes': 'Nòt (opsyonèl)',
            'label.password': 'Modpas',
            'label.confirmPassword': 'Konfime Modpas',
            'label.selectExpenses': 'Chwazi Depans pou Peye',

            // Placeholders
            'placeholder.notes': 'egzanp, Peye Manman, Peye David, elatriye.',
            'placeholder.bulkNotes': 'Peye Manman, Peye David, elatriye.',
            'placeholder.password': 'Antre modpas',
            'placeholder.confirmPassword': 'Konfime modpas',

            // Modal titles
            'modal.recordPayment': 'Anrejistre Peman',
            'modal.recordPaymentFor': 'Anrejistre Peman {{name}}',
            'modal.addToSavings': 'Ajoute nan Epay {{name}}',
            'modal.editPayment': 'Modifye Peman',
            'modal.editPaymentFor': 'Modifye Peman {{name}}',
            'modal.bulkPayment': 'Peman Miltip',
            'modal.unlockApp': 'Debloке App',
            'modal.createPassword': 'Kreye Modpas',
            'modal.resetData': 'Reyinisyalize Done?',

            // Modal subtitles
            'modal.unlockSubtitle': 'Antre modpas ou pou kontinye',
            'modal.createPasswordSubtitle': 'Mete yon modpas pou pwoteje done ou',
            'modal.resetSubtitle': 'Sa ap efase tout done lokal ak modpas. Done nan nyaj (Google Sheets) ap rete an sekirite.',

            // Status labels
            'status.paid': 'Peye mwa sa',
            'status.paidPayperiod': 'Peye peryòd sa',
            'status.goalReached': 'Objektif Atenn!',
            'status.paidOff': 'Fin Peye!',
            'status.overdue': 'An Reta!',
            'status.pastDue': 'An Reta!',
            'status.dueToday': 'Dwe jodi a',
            'status.dueSoon_one': 'Dwe nan {{count}} jou',
            'status.dueSoon_other': 'Dwe nan {{count}} jou',
            'status.daysLeft_one': '{{count}} jou rete',
            'status.daysLeft_other': '{{count}} jou rete',
            'status.dueOnThe': 'Dwe {{ordinal}} nan mwa',

            // Sync indicator
            'sync.synced': 'Senkronize',
            'sync.syncing': 'Ap senkronize...',
            'sync.offline': 'Pa gen koneksyon',
            'sync.error': 'Erè Sync',
            'sync.unknown': 'Enkoni',
            'sync.lastSynced': 'Dènye sync: {{time}}',

            // Toast notifications
            'toast.paymentSaved': 'Peman anrejistre avèk siksè!',
            'toast.paymentUpdated': 'Peman mete ajou avèk siksè!',
            'toast.paymentDeleted': 'Peman efase',
            'toast.paymentsFailed': 'Echèk anrejistreman peman',
            'toast.loadFailed': 'Echèk chajman done',
            'toast.currencyChanged': 'Lajan chanje a {{currency}}',
            'toast.languageChanged': 'Lang chanje a {{language}}',
            'toast.passwordCreated': 'Modpas kreye avèk siksè!',
            'toast.welcomeBack': 'Byenveni ankò!',
            'toast.incorrectPassword': 'Modpas pa kòrèk',
            'toast.noPasswordFound': 'Pa jwenn modpas',
            'toast.setupFailed': 'Echèk konfigirasyon modpas',
            'toast.passwordTooShort': 'Modpas dwe gen omwen 4 karaktè',
            'toast.passwordsMismatch': 'Modpas yo pa menm',
            'toast.dataCleared': 'Done efase. Kreye yon nouvo modpas.',
            'toast.selectExpense': 'Tanpri chwazi omwen yon depans',
            'toast.invalidAmount': 'Tanpri antre yon montan valab',
            'toast.invalidAmountFor': 'Montan pa valab pou {{name}}',
            'toast.exceedsBalance': 'Montan depase balans ki rete ({{amount}})',
            'toast.paymentsExported': 'Peman ekspòte nan CSV',
            'toast.bulkPaymentsSaved_one': '{{count}} peman anrejistre!',
            'toast.bulkPaymentsSaved_other': '{{count}} peman anrejistre!',

            // Progress text
            'progress.paymentsOf': '{{current}} nan {{total}} peman',
            'progress.savedOf': '{{saved}} nan {{total}}',
            'progress.paychecksLeft': '{{count}} chèk rete',
            'progress.perPaycheck': '{{amount}}/chèk',
            'progress.remaining': '{{amount}} rete',

            // Expense card text
            'expense.perMonth': '{{amount}}/mwa',
            'expense.estimated': '~{{amount}}/mwa',
            'expense.average': 'Mwayèn: {{amount}}',
            'expense.noHistory': 'Pa gen istwa toujou',
            'expense.avgHint': 'Mwayèn 3 dènye mwa: {{amount}}',
            'expense.estimatedHint': 'Estimasyon: {{amount}}',
            'expense.trend.up': '↑',
            'expense.trend.down': '↓',
            'expense.trend.stable': '≈',
            'expense.total': '{{amount}} total',
            'expense.dueDate': 'Dwe: {{date}}',
            'expense.dueDay': 'Dwe: {{ordinal}} nan mwa',
            'expense.credit': '{{amount}} Kredi',
            'expense.pastDue': '{{amount}} An Reta!',
            'status.variableDue': 'Varyab - dwe {{ordinal}}',

            // Payment history
            'history.title': 'Peman Resan',
            'history.noPayments': 'Pa gen peman anrejistre toujou',
            'history.editPayment': 'Modifye peman',
            'history.deletePayment': 'Efase peman',

            // Confirmation dialogs
            'confirm.deletePayment': 'Èske ou sèten ou vle efase peman sa a?',
            'confirm.forgotPassword': 'Bliye modpas? Reyinisyalize done',

            // Loading
            'loading.text': 'Ap chaje...',

            // CSV export headers
            'csv.date': 'Dat',
            'csv.category': 'Kategori',
            'csv.amount': 'Montan',
            'csv.notes': 'Nòt',
            'csv.id': 'ID',

            // Tooltips
            'tooltip.syncStatus': 'Estati senkronizasyon',
            'tooltip.selectCurrency': 'Chwazi lajan',
            'tooltip.selectLanguage': 'Chwazi lang',
            'tooltip.toggleTheme': 'Chanje tèm',
            'tooltip.signOut': 'Dekonekte',
            'tooltip.exportCSV': 'Ekspòte nan CSV',
            'tooltip.settings': 'Paramèt',

            // Authentication
            'auth.subtitle': 'Konekte pou wè depans ou yo',
            'auth.signInWithGoogle': 'Konekte ak Google',
            'auth.signOut': 'Dekonekte',
            'auth.privacyNote': 'Done ou yo rete prive e senkronize ak pwòp Fèy Google ou',
            'auth.popupBlocked': 'Fenèt popup bloke. Tanpri pèmèt popup pou sit sa a.',
            'auth.signInFailed': 'Echèk koneksyon. Tanpri eseye ankò.',
            'auth.signOutFailed': 'Echèk dekoneksyon. Tanpri eseye ankò.',
            'toast.signedOut': 'Dekonekte avèk siksè',

            // Setup wizard
            'setup.welcomeTitle': 'Byenveni!',
            'setup.greeting': 'Kontan rankontre ou, {{name}}',
            'setup.intro': 'Pou senkronize depans ou yo ak Google Sheets, ou bezwen mete pwòp fèy ou:',
            'setup.step1': 'Kreye yon nouvo Fèy Google',
            'setup.step2': 'Ajoute yon tab "Payments" ak antèt: Date, Category, Amount, Notes, ID',
            'setup.step3': 'Kopye kòd Apps Script nan SETUP.md',
            'setup.step4': 'Deplwaye epi kole URL nan Paramèt',
            'setup.skipNote': 'Ou ka sote sa a e itilize mòd san koneksyon - done ou yo ap estoke lokalman.',
            'setup.setupLater': 'Konfigire Pita',
            'setup.continue': 'Kontinye',
            'setup.usingOffline': 'Itilize mòd san koneksyon. Done ou yo estoke lokalman.',

            // Settings
            'settings.title': 'Paramèt',
            'settings.sheetsUrl': 'URL Google Sheets',
            'settings.sheetsUrlPlaceholder': 'https://script.google.com/macros/s/...',
            'settings.sheetsUrlHint': 'URL deplwaman Apps Script pou senkronize',
            'toast.sheetsUrlSaved': 'URL Google Sheets anrejistre',
            'toast.sheetsUrlCleared': 'URL Google Sheets retire (itilize mòd san koneksyon)',
            'settings.defaultCurrency': 'Lajan Pa Defo',
            'settings.currencyHint': 'Tout depans anrejistre nan lajan sa a',
            'settings.manageExpenses': 'Jere Depans',
            'settings.addExpense': 'Ajoute Depans',
            'settings.editExpense': 'Modifye Depans',
            'settings.expenseName': 'Non',
            'settings.expenseNamePlaceholder': 'egzanp, Lwaye, Telefòn, elatriye.',
            'settings.icon': 'Ikòn',
            'settings.type': 'Tip',
            'settings.typeRecurring': 'Bòdwo Chak Mwa',
            'settings.typeLoan': 'Prè',
            'settings.typeGoal': 'Objektif Epay',
            'settings.typeVariable': 'Varyab',
            'settings.dueDay': 'Jou Dèt',
            'settings.dueDate': 'Dat Dèt',
            'settings.totalPayments': 'Total Peman',
            'settings.saveExpense': 'Anrejistre Depans',
            'settings.deleteExpense': 'Efase',
            'settings.confirmDelete': 'Èske ou sèten ou vle efase depans sa a? Sa pa pral efase peman ki deja fèt.',
            'settings.setupWizard': 'Asistan Enstalasyon',
            'settings.restartWizard': 'Kouri Asistan Ankò',
            'settings.restartWizardHint': 'Pase nan pwosesis enstalasyon an ankò pou mete ajou preferans yo',
            'toast.expenseSaved': 'Depans anrejistre avèk siksè!',
            'toast.expenseDeleted': 'Depans efase',
            'toast.expenseError': 'Echèk anrejistreman depans',
            'toast.defaultCurrencyChanged': 'Lajan pa defo chanje a {{currency}}',

            // Bulk payment
            'bulk.allPaid': 'Tout depans peye e ajou!',
            'bulk.pastDue': '(An Reta)',

            // Ordinals (Haitian Creole uses yèm/ye for ordinals)
            'ordinal.st': 'ye',
            'ordinal.nd': 'yèm',
            'ordinal.rd': 'yèm',
            'ordinal.th': 'yèm',

            // Exchange rates
            'rates.lastUpdated': 'To: {{date}}',
            'rates.offline': 'To: Anrejistreman',
            'rates.unavailable': 'To pa disponib',
            'toast.ratesFetched': 'To echanj mete ajou',
            'toast.ratesFetchFailed': 'Sèvi ak to echanj anrejistre',
            'tooltip.rateStatus': 'Dènye miz ajou to echanj',

            // Setup Wizard - Step 1: Welcome
            'wizard.welcome.title': 'Byenveni, {{name}}!',
            'wizard.welcome.subtitle': 'Ann konfigire trackè depans ou',
            'wizard.welcome.description': 'Nou pral gide ou atravè kèk etap rapid pou pèsonalize eksperyans ou e ede ou kòmanse swiv depans ou.',
            'wizard.welcome.start': 'Ann Kòmanse',

            // Setup Wizard - Step 2: Expense Types
            'wizard.types.title': 'Swiv Diferan Kalite Depans',
            'wizard.types.subtitle': 'Kat fason pisan pou jere lajan ou',
            'wizard.types.recurring.title': 'Bòdwo Chak Mwa',
            'wizard.types.recurring.description': 'Depans regilye tankou lwaye, asirans ak abònman ki repete chak mwa.',
            'wizard.types.loan.title': 'Prè',
            'wizard.types.loan.description': 'Swiv peman prè machin, ipotèk oswa prè pèsonèl ak kontè peman.',
            'wizard.types.goal.title': 'Objektif Epay',
            'wizard.types.goal.description': 'Mete objektif pou vakans, epay ijans oswa gwo acha ak dat limit.',
            'wizard.types.variable.title': 'Bòdwo Varyab',
            'wizard.types.variable.description': 'Depans ki chanje chak mwa tankou sèvis piblik, manje oswa gaz.',

            // Amount Type toggle (mini-wizard)
            'wizard.amountType.label': 'Tip Montan',
            'wizard.amountType.fixed': 'Fiks',
            'wizard.amountType.fixedHint': 'Menm chak mwa',
            'wizard.amountType.variable': 'Varyab',
            'wizard.amountType.variableHint': 'Chanje chak mwa',
            'wizard.amountType.variableNote': 'Montan ou antre a se yon estimasyon. App la pral swiv peman reyèl ou yo epi montre yon mwayèn 3 mwa ak endis tandans.',
            'wizard.amountType.estimatedAmount': 'Montan Estime',

            // Setup Wizard - Step 3: Features
            'wizard.features.title': 'Fonksyon Pisan',
            'wizard.features.subtitle': 'Tout sa ou bezwen pou kenbe finans ou sou kontwòl',
            'wizard.features.sync.title': 'Senkronizasyon Nyaj',
            'wizard.features.sync.description': 'Done ou yo senkronize sou tout aparèy ou yo via Google Sheets',
            'wizard.features.currency.title': 'Plizyè Lajan',
            'wizard.features.currency.description': 'Sipò pou 10 lajan ak konvèsyon an tan reyèl',
            'wizard.features.history.title': 'Istwa Peman',
            'wizard.features.history.description': 'Swiv tout peman ak dat, nòt ak modifikasyon fasil',
            'wizard.features.bulk.title': 'Peman Miltip',
            'wizard.features.bulk.description': 'Make plizyè depans kòm peye nan yon sèl aksyon',

            // Setup Wizard - Step 4: Pay Schedule
            'wizard.schedule.title': 'Orè Peman Ou',
            'wizard.schedule.subtitle': 'Ede nou kalkile montan epay pa chèk',
            'wizard.schedule.frequency': 'Konbyen fwa yo peye ou?',
            'wizard.schedule.weekly': 'Chak Semèn',
            'wizard.schedule.biweekly': 'Chak 2 Semèn',
            'wizard.schedule.semimonthly': '1ye ak 15',
            'wizard.schedule.monthly': 'Chak Mwa',
            'wizard.schedule.nextPayday': 'Ki lè pwochen jou peman ou?',
            'wizard.schedule.optional': '(Opsyonèl - ou ka konfigire pita nan Paramèt)',

            // Setup Wizard - Step 5: Currency
            'wizard.currency.title': 'Chwazi Lajan Ou',
            'wizard.currency.subtitle': 'Tout depans ou yo pral swiv nan lajan sa a',
            'wizard.currency.hint': 'Ou ka wè montan nan lòt lajan lè w itilize konvètisè nan ba anwo a.',

            // Setup Wizard - Step 6: Add Expenses
            'wizard.expenses.title': 'Ajoute Depans Ou',
            'wizard.expenses.subtitle': 'Ajoute depans komen rapidman oswa kreye pèsonalize',
            'wizard.expenses.common': 'Depans Komen',
            'wizard.expenses.rent': 'Lwaye/Ipotèk',
            'wizard.expenses.utilities': 'Sèvis Piblik',
            'wizard.expenses.phone': 'Telefòn',
            'wizard.expenses.car': 'Peman Machin',
            'wizard.expenses.insurance': 'Asirans',
            'wizard.expenses.internet': 'Entènèt',
            'wizard.expenses.custom': 'Ajoute Depans Pèsonalize',
            'wizard.expenses.added': '{{name}} ajoute!',
            'wizard.expenses.yourExpenses': 'Depans Ou',
            'wizard.expenses.none': 'Pa gen depans ajoute toujou',

            // Setup Wizard - Step 7: Savings Goal
            'wizard.goals.title': 'Mete yon Objektif Epay',
            'wizard.goals.subtitle': 'Opsyonèl: Kòmanse ekonomize pou yon bagay espesyal',
            'wizard.goals.suggestions': 'Objektif Popilè',
            'wizard.goals.emergency': 'Fon Ijans',
            'wizard.goals.vacation': 'Vakans',
            'wizard.goals.downpayment': 'Avans',
            'wizard.goals.retirement': 'Retrèt',
            'wizard.goals.custom': 'Objektif Pèsonalize',
            'wizard.goals.amount': 'Montan Objektif',
            'wizard.goals.targetDate': 'Dat Objektif',
            'wizard.goals.perPaycheck': 'Ou pral bezwen ekonomize {{amount}} pa chèk',

            // Setup Wizard - Step 8: Complete
            'wizard.complete.title': 'Ou Pare!',
            'wizard.complete.subtitle': 'Trackè depans ou pare pou itilize',
            'wizard.complete.summary': 'Rezime Konfigirasyon',
            'wizard.complete.expenses': '{{count}} depans ajoute',
            'wizard.complete.currency': 'Lajan: {{currency}}',
            'wizard.complete.schedule': 'Orè peman: {{schedule}}',
            'wizard.complete.tip': 'Konsèy: Itilize bouton Peman Miltip pou make plizyè depans kòm peye nan jou peman!',
            'wizard.complete.dashboard': 'Ale nan Tablo',

            // Wizard Navigation
            'wizard.next': 'Pwochen',
            'wizard.back': 'Retounen',
            'wizard.skip': 'Sote',
            'wizard.stepOf': 'Etap {{current}} nan {{total}}'
        }
    },

    /**
     * Initialize i18n - load saved language or detect from browser
     */
    init() {
        const savedLanguage = localStorage.getItem('expense_language');
        if (savedLanguage && this.LANGUAGES[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else {
            // Auto-detect from browser
            const browserLang = navigator.language.split('-')[0];
            if (this.LANGUAGES[browserLang]) {
                this.currentLanguage = browserLang;
            }
        }
    },

    /**
     * Set the current language
     * @param {string} code - Language code (e.g., 'en', 'es')
     */
    setLanguage(code) {
        if (this.LANGUAGES[code]) {
            this.currentLanguage = code;
            localStorage.setItem('expense_language', code);
            this.translatePage();
            return true;
        }
        return false;
    },

    /**
     * Get a translation by key with optional parameter interpolation
     * @param {string} key - Translation key (e.g., 'toast.paymentSaved')
     * @param {Object} params - Parameters for interpolation (e.g., {name: 'Rent'})
     * @returns {string} - Translated string or key if not found
     */
    t(key, params = {}) {
        const translations = this.translations[this.currentLanguage] || this.translations.en;
        let text = translations[key];

        if (text === undefined) {
            console.warn(`Missing translation: ${key}`);
            return key;
        }

        // Interpolate parameters: {{name}} -> value
        Object.keys(params).forEach(param => {
            text = text.replace(new RegExp(`{{${param}}}`, 'g'), params[param]);
        });

        return text;
    },

    /**
     * Get a pluralized translation
     * @param {string} key - Base translation key (e.g., 'status.daysLeft')
     * @param {number} count - The count for pluralization
     * @param {Object} params - Additional parameters
     * @returns {string} - Pluralized translated string
     */
    plural(key, count, params = {}) {
        // Determine suffix based on count (English rules: 1 = _one, else = _other)
        const suffix = count === 1 ? '_one' : '_other';
        const pluralKey = key + suffix;

        return this.t(pluralKey, { count, ...params });
    },

    /**
     * Translate all elements with data-i18n attributes
     */
    translatePage() {
        // Translate text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Translate titles (tooltips)
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
    },

    /**
     * Get ordinal suffix for a number (1st, 2nd, 3rd, etc.)
     * @param {number} n - The number
     * @returns {string} - Number with ordinal suffix
     */
    getOrdinal(n) {
        const s = [
            this.t('ordinal.th'),
            this.t('ordinal.st'),
            this.t('ordinal.nd'),
            this.t('ordinal.rd')
        ];
        const v = n % 100;
        const suffix = s[(v - 20) % 10] || s[v] || s[0];
        return n + suffix;
    },

    /**
     * Get list of available languages for selector
     * @returns {Array} - Array of {code, name, nativeName}
     */
    getAvailableLanguages() {
        return Object.values(this.LANGUAGES);
    }
};
