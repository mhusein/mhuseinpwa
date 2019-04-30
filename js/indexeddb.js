function cekDbs(storeName, id) {
    return new Promise(function (resolve, reject) {
        databasePromise(idb)
            .then(function (db) {
                var tx = db.transaction(storeName, "readonly");
                var store = tx.objectStore(storeName);
                return store.get(id);
            })
            .then(function (data) {
                if (data != undefined) {
                    resolve("data favorit")
                } else {
                    reject("bukan data favorit")
                }
            });
    });
}


function createDataFav(data, iconFavText) {
    // console.log(data);
    var storeName = "pemain_favorit";
    var dataToCreate = { 
        id: data.id,
        nama: data.name,
        countryOfBirth: data.countryOfBirth,
        dateOfBirth: data.dateOfBirth,
        nationality: data.nationality
    }    
    databasePromise(idb).then(db => {
        const tx = db.transaction(storeName, 'readwrite');
        tx.objectStore(storeName).put(dataToCreate);
        return tx.complete;
    }).then(function () {
        // console.log('berhasil disimpan.');
        document.getElementById(iconFavText).innerHTML = "favorite";
        M.toast({
            html: 'Pemain berhasil difavoritkan!'
        });
    }).catch(function () {
        M.toast({
            html: 'Maaf, ada kesalahan dalam sistem kami'
        });
    });
}

function deleteDatafav(data, iconFavText) {
    var storeName = "pemain_favorit";
    databasePromise(idb).then(function (db) {
        var tx = db.transaction(storeName, 'readwrite');
        var store = tx.objectStore(storeName);
        store.delete(data);
        return tx.complete;
    }).then(function () {
        document.getElementById(iconFavText).innerHTML = "favorite_border";
        M.toast({
            html: 'Pemain berhasil dihapus dari favorit!'
        });
    }).catch(function () {
        M.toast({
            html: 'Maaf, ada kesalahan dalam sistem kami'
        });
    });
}