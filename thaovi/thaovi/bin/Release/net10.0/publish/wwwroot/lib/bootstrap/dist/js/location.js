// Hàm lấy vị trí hiện tại của người dùng
window.getLocation = function () {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Trình duyệt không hỗ trợ geolocation");
        } else {
            navigator.geolocation.getCurrentPosition(
                pos => {
                    resolve({
                        lat: pos.coords.latitude,
                        lon: pos.coords.longitude
                    });
                },
                err => reject(err.message)
            );
        }
    });
};
