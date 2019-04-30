function pasangKlasemen(data) {
    var tabelKlasemen = '';
    data.standings.forEach(function (klasemen) {
        var dataKlasemen = '';
        klasemen.table.forEach(function (tim) {
            var imgURl = "";
            try {
                imgUrl = tim.team.crestUrl;
                imgUrl = imgUrl.replace(/^http:\/\//i, 'https://');
            } catch (error) {
                console.log("ada gambar null dari server");
            }
            dataKlasemen +=`
            <tr>
                <td class="center-align">${tim.position}</td>
                <td>
                <!--<a href="./detail-team.html?id=${tim.team.id}">-->
                <p class="">
                <img src=${imgUrl}  alt="" style="float:left;width:20px;height:20px;margin-right:20px">
                </p>
                <p class="hide-on-med-and-down">
                ${tim.team.name}
                </p>
                <!--</a>-->
                </td>
                <td class="center-align">${tim.playedGames}</td>
                <td class="center-align">${tim.won}</td>
                <td class="center-align">${tim.draw}</td>
                <td class="center-align">${tim.lost}</td>
                <td class="center-align">${tim.goalsFor}</td>
                <td class="center-align">${tim.goalsAgainst}</td>
                <td class="center-align">${tim.goalDifference}</td>
                <td class="center-align">${tim.points}</td>
            </tr>`

        })

    tabelKlasemen += `
        <h5 class="header"> 
            Klasemen Liga Italia Seri A
        </h5>
        Last Updated:${new Date(data.competition.lastUpdated)} 
        <table class="responsive-table striped highlight" >
        <thead>
        <tr>
            <th class="center-align">Posisi</th>
            <th>Tim</th>
            <th class="center-align">Played</th>
            <th class="center-align">W</th>
            <th class="center-align">D</th>
            <th class="center-align">L</th>
            <th class="center-align">GF</th>
            <th class="center-align">GA</th>
            <th class="center-align">GD</th>
            <th class="center-align">Points</th>
        </tr>
        </thead>
        <tbody>` + dataKlasemen + `</tbody>
        </table><br><br>
        Played = matches played atau played. Artinya jumlah pertandingan yang sudah dimainkan dalam kompetisi.<br>
        W - matches won = jumlah pertandingan yang dimenangi<br>
        D - matches drawn = jumlah pertandingan yang hasilnya seri<br>
        L - matches lose = jumlah pertandingan yang kalah<br>
        GF - goals for or goals scored = total jumlah gol yang dicetak<br>
        GA - goals against or goals conceded = jumlah total kebobolan gol<br>
        GD - goal difference (goals scored minus goals conceded) = Selisih gol (jumlah GF dikurang GA)<br>
        Points = poin skor<br>`
    });
    document.getElementById("klasemen").innerHTML = tabelKlasemen;
}