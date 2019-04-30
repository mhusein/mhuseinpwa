function aturFavorit(id, iconFavText){    
    cekDbs("pemain_favorit", id).then((msg) => {
        deleteDatafav(id, iconFavText);
    }).catch((msg) => {
        dt_pemain = getPlayerById(id);
        dt_pemain.then(function (pemain) {
            createDataFav(pemain, iconFavText);            
        });
    }) 
}
function refreshIconFavorit(id, iconFavText) {
    cekDbs("pemain_favorit", id).then((msg) => {
        document.getElementById(iconFavText).innerHTML = "favorite";
    }).catch((msg) => {
        document.getElementById(iconFavText).innerHTML = "favorite_border";
    })
}
function hapusUlFavorit(id, li) {
    var storeName = "pemain_favorit";
    databasePromise(idb).then(function (db) {
        var tx = db.transaction(storeName, 'readwrite');
        var store = tx.objectStore(storeName);
        store.delete(id);
        return tx.complete;
    }).then(function () {
        var ulElement = document.getElementById(li);
        ulElement.remove();
        M.toast({
            html: 'Pemain berhasil dihapus dari favorit!'
        });
    }).catch(function () {
        M.toast({
            html: 'Maaf, ada kesalahan dalam sistem kami'
        });
    });
}