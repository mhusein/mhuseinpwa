function databasePromise(idb) {
    return idb.open("dbmelijabfootball", 1, function (upgradeDb) {
        if (!upgradeDb.objectStoreNames.contains("pemain_favorit")) {
            var indexFav = upgradeDb.createObjectStore("pemain_favorit", {
                keyPath: "id"
            });
            indexFav.createIndex("namaPemain", "namaPemain", {
                unique: false
            });
        }
    });
}