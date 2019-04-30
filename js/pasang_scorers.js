function pasangScorers(data) {
    var holder = '';
    holder +=`
    <h5 class="header"> 
        Top Scorers Liga Italia Seri A
    </h5>
    <br>
    <ul class="collection">`;
    var id="";
    var iconFavText = "";
    data.scorers.forEach(function (players) {
        id = players.player.id;
        iconFavText = "iconFav-" + id;
        holder +=`
        <li class="collection-item">
            <div>
                ${players.player.name}<br>
                ${players.numberOfGoals} Goals
                <a href="javascript:void(0)" class="secondary-content" onclick="aturFavorit(${players.player.id}, '${iconFavText}')">
                <i id="${iconFavText}" class="material-icons">favorite_border</i></a>
            </div>
        </li>`;
        refreshIconFavorit(players.player.id, iconFavText);
    });
    holder +=`</ul >`;
    document.getElementById("scorers").innerHTML = holder;
}