self.addEventListener('install', event => {
    console.log("Service Worker installed");
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log("Service Worker activated");
});

// Push notification: lời chúc ngẫu nhiên
self.addEventListener('push', event => {
    const wishes = [
        "✨ Chúc bạn một ngày thật vui vẻ ✨",
        "🌸 Mong bạn luôn hạnh phúc 🌸",
        "💖 Hãy mỉm cười thật nhiều 💖"
    ];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

    event.waitUntil(
        self.registration.showNotification("💌 Lời chúc hôm nay", {
            body: randomWish,
            icon: "/icon-192.png"
        })
    );
});
