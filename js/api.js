var api_football = '4fc170cb0f274e6290b9cdc7a08542fd';
var id_liga = "SA" //italie
/*----------------url------------------*/
var base_url = "https://api.football-data.org/v2/";
var url_klasemen = base_url.concat("competitions/" + id_liga + "/standings?standingType=TOTAL");
var url_scorers = base_url.concat("competitions/" + id_liga + "/scorers");
var url_pemain = base_url.concat("players/");

var fetchApi = url => {
    return fetch(url, {
        headers: {
            'X-Auth-Token': api_football
        }
    });
}
function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
    return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
    // Parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
}
/*-------MAIN--------*/
function getKlasemen() {
    if ('caches' in window) {
        caches.match(url_klasemen).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    pasangKlasemen(data);
                });
            }
        });
    }
    fetchApi(url_klasemen)
        .then(status)
        .then(json)
        .then(function (data) {
            pasangKlasemen(data);
        })
        .catch(error);
}
function getScorers() {
    if ('caches' in window) {
        caches.match(url_scorers).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    //console.log(data);
                    console.log("mengambil data dari cache");
                    pasangScorers(data);
                });
            }
        });
    }
    fetchApi(url_scorers)
        .then(status)
        .then(json)
        .then(function (data) {
            //console.log(data)
            pasangScorers(data);
        })
        .catch(error);
}
function getFavorit() {
    databasePromise(idb).then(function (db) {
        var tx = db.transaction('pemain_favorit', 'readonly');
        var store = tx.objectStore('pemain_favorit');
        return store.getAll();
    }).then(function (data) {
        pasangFavorit(data);
    });
}
//---------------------BY ID -------------------
function getPlayerById(id) {
    return new Promise(function (resolve) {
        if ('caches' in window) {
            caches.match(url_pemain + id).then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        resolve(data)
                    });
                }
            });
        }
        fetchApi(url_pemain + id)
            .then(status)
            .then(json)
            .then(function (data) {
                resolve(data);
            })
            .catch(error);
    });
}