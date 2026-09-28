// Xin quyền hiển thị thông báo
function requestNotificationPermission() {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Thông báo được phép");
                // Gửi thử một thông báo lời chúc
                new Notification("💌 Lời chúc hôm nay", {
                    body: "✨ Chúc bạn một ngày thật vui vẻ ✨",
                    icon: "/icon-192.png"
                });
            } else {
                console.log("Người dùng từ chối thông báo");
            }
        });
    } else {
        console.log("Trình duyệt không hỗ trợ Notification API");
    }
}
