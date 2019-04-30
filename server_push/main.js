var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://android.googleapis.com/gcm/send/eDMtUo7PdbI:APA91bGepavQz9-4Wop5nLg487yplCatHnug99heLzi0A3vsHpb4DW52RjCNAXL0MMM-Rt2c7oAZonSDkoX9LGdxkxVh1HstiSwnotGbHdddr2lEtQM8THrpVBlFsudeXHWybfbhfcvp",
    "keys": {
        "p256dh": "BMbTRgcoDIxa0eD4zLU3SwUFopH50iyYV+aorjAkKAJ+yU38B250H4y4sM788LJYydAAWSBYgjJTDaGf4wpREiw=",
        "auth": "SQm+Pm3k2Urp0dIDPoRE7g=="
    }
};
var payload = 'Pak iki aku wes iso ngirim nganggo payload!';
var options = {
    gcmAPIKey: 'AAAAIt_PeEA:APA91bEpyxsv9JzrdA_C3QW_XtC5KHSK0MqMyGVmYxLccdkDIxn7_eq6ByezdD6RMzPzXAOKZ5dTgDbgl2ajdoQbEgIPdfq8B_ptXQw6a1gvWcRUh7L3bjEfGNPWPGgiwpkjWR8dT3Tv',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);