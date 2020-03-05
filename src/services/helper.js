export default function displayNotification() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            if (typeof reg !== "undefined") {
                var options = {
                    body: 'Here is a notification body!',
                    icon: 'images/example.png',
                    vibrate: [100, 50, 100],
                    data: {
                        dateOfArrival: Date.now(),
                        primaryKey: 1
                    }
                };
                setTimeout(d => {
                    reg.showNotification('Hello world!', options);
                }, 5000)

            }
        });
    }
}