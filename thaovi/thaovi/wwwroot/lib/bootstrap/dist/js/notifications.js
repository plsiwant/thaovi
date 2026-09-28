// js/notifications.js
function requestNotificationPermission() {
    if (!("Notification" in window)) {
        alert("Trình duyệt không hỗ trợ thông báo.");
        return;
    }

    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Thông báo đã bật 🎉", {
                body: "Bạn sẽ nhận được lời chúc mỗi ngày!",
                icon: "/icon.png" // có thể thêm icon nếu muốn
            });
        } else {
            console.log("Người dùng từ chối thông báo.");
        }
    });
}
