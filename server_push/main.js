var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://android.googleapis.com/gcm/send/dz_gj4uiUys:APA91bFo7SRmdlAo-PdOfNnIvbVWFFLhxNtHCkASNaA97BqGO8siRJbSzR8A6p6O96NI1R0ZgPSqNu2vvOhxfGliI_sL89CEhis7tOfygZ3sWqAc-vsmZpwdaSJrlPB0n8edg3KXsfMN",
    "keys": {
        "p256dh": "BEgFln/qIKF3KAF0RIpbcD+7oodmxNgQMmIAQYhiYBhUNc6jJC+I0E6wvSA6Ka0WDUfIzQ6IVWis6HRs2yKr9/A=",
        "auth": "lKoWo0F1k+3ROPbnaT3Ikw=="
    }
};
var payload = 'Mbak iki aku wes iso ngirim nganggo payload!';
var options = {
    gcmAPIKey: 'AAAAIt_PeEA:APA91bEpyxsv9JzrdA_C3QW_XtC5KHSK0MqMyGVmYxLccdkDIxn7_eq6ByezdD6RMzPzXAOKZ5dTgDbgl2ajdoQbEgIPdfq8B_ptXQw6a1gvWcRUh7L3bjEfGNPWPGgiwpkjWR8dT3Tv',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);