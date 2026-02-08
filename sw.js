// Service Worker for Personal Expense Tracker
const CACHE_NAME = 'expense-tracker-v3';
const ASSETS_TO_CACHE = [
    '/personal-expense-tracker/',
    '/personal-expense-tracker/index.html',
    '/personal-expense-tracker/css/styles.css',
    '/personal-expense-tracker/js/config.js',
    '/personal-expense-tracker/js/encryption.js',
    '/personal-expense-tracker/js/sheets-api.js',
    '/personal-expense-tracker/js/i18n.js',
    '/personal-expense-tracker/js/app.js',
    '/personal-expense-tracker/icons/icon-192.svg',
    '/personal-expense-tracker/icons/icon-512.svg',
    '/personal-expense-tracker/manifest.json'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching app assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip Google Apps Script API calls (always need fresh data)
    if (event.request.url.includes('script.google.com')) {
        return;
    }

    // Skip CDN resources (Tailwind, fonts, Lucide) - let browser handle caching
    if (event.request.url.includes('cdn.tailwindcss.com') ||
        event.request.url.includes('fonts.googleapis.com') ||
        event.request.url.includes('fonts.gstatic.com') ||
        event.request.url.includes('unpkg.com')) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Clone the response before caching
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(event.request)
                    .then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        // Return offline fallback for navigation requests
                        if (event.request.mode === 'navigate') {
                            return caches.match('/personal-expense-tracker/index.html');
                        }
                        return new Response('Offline', { status: 503 });
                    });
            })
    );
});
