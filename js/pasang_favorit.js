function pasangFavorit(data) {
    var holder = '';
    holder +=`
        <h5 class="header"> 
            Daftar Pemain Favorit Anda
        </h5><br>
    `;
    holder +=`<ul class="collapsible expandable" id="ulFavorit">`;
    if (data.length > 0){
        data.forEach(function (pemain) {
            holder +=`
                <li id="ulFavorit-${pemain.id}">
                    <div class="collapsible-header"><i class="material-icons">face</i>${pemain.nama}</div>
                    <div class="collapsible-body">
                        <div style="padding-left:35px; margin-top:-27px">
                        <table class="stripped">
                            <tr>
                                <td width='190px'>Kebangsaan</td>
                                <td>:</td>
                                <td>${pemain.nationality}</td>
                            </tr>
                            <tr>
                                <td>Kelahiran</td>
                                <td>:</td>
                                <td>${pemain.countryOfBirth}</td>
                            </tr>
                            <tr>
                                <td>Tanggal Lahir</td>
                                <td>:</td>
                                <td>${pemain.dateOfBirth}</td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <a class="waves-effect waves-light btn-small" href="javascript:void(0)" onclick="hapusUlFavorit(${pemain.id}, 'ulFavorit-${pemain.id}');"><i class="material-icons left">delete</i>Hapus dari favorit</a>
                                </td>
                            </tr>
                        </table>                     
                        </div>
                    </div>
                </li>        
            `;
        });
    }else{
        holder +=`<div style="padding:20px" class="center-align">------------------Anda Belum Memiliki Pemain Favorit------------------</div>`;
    }
    holder +=`</ul>`;
    document.getElementById("favorit-content").innerHTML = holder;
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    // var instances = M.Collapsible.init(elems, { accordion: false});
    
    
}