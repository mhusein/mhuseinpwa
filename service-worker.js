importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
if (workbox) {
    console.log(`Workbox berhasil dimuat`);
} else {
    console.log(`Workbox gagal dimuat`);
}

workbox.precaching.precacheAndRoute([
    { url: './', revision: '1' },
    { url: './nav.html', revision: '1' },
    { url: './index.html', revision: '1' },
    { url: './logoku-512.png', revision: '1' },
    { url: './favicon.png', revision: '1' },
    { url: './manifest.json', revision: '1' },
    { url: './pages/home.html', revision: '1' },
    { url: './pages/scorers.html', revision: '1' },
    { url: './pages/favorit.html', revision: '1' },
    { url: './css/materialize.min.css', revision: '1' },
    { url: './css/mycustom.css', revision: '1' },
    { url: './js/api.js', revision: '1' },
    { url: './js/idb.js', revision: '1' },
    { url: './js/database.js', revision: '1' },
    { url: './js/favorit.js', revision: '1' },
    { url: './js/indexeddb.js', revision: '1' },
    { url: './js/init.js', revision: '1' },
    { url: './js/jquery-2.1.1.min.js', revision: '1' },
    { url: './js/materialize.js', revision: '1' },
    { url: './js/nav.js', revision: '1' },
    { url: './js/pasang_favorit.js', revision: '1' },
    { url: './js/pasang_klasemen.js', revision: '1' },
    { url: './js/pasang_scorers.js', revision: '1' },
    { url: './js/pasang.js', revision: '1' }
]);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
)

/* 15 hari */
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'gambar',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 15 * 24 * 60 * 60, 
            }),
        ],
    }),
);
/* ambil font google */
workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);
workbox.routing.registerRoute(
    new RegExp('https://fonts.gstatic.com/'),
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.cacheFirst()
);


self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: './logoku-512.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});