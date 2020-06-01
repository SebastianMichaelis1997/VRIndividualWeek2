"use strict";

function getPicUrl(futter, zweck) {
    var res = '';
    if (futter == "möhre") {
        res = 'carrot-1751148_640';
    } else if (futter == "mais") {
        res = 'corn-155613_640';
    } else if (futter == "salat") {
        res = 'cabbage-575525_640';
    }
    if (zweck == "1") {
        res += '_round';
    }
    res += '.png'
    return res;
}

$(document).ready(function () {

    $.getJSON("https://webtechlecture.appspot.com/cloudstore/listobjects",
        {owner: 'futterapp'},
        function (data) {
            var newRow = true;
            var selectString = '<select name="animals" id="selectAnimal" class="custom-select">';
            var domStr = '<div class="container"><h2> Unsere Stars</h2>';
            for (var idx in data) {
                var tier = data[idx].jsonstring;
                selectString += '<option value="' + tier.title + '">' + tier.title + '</option>';
                if (newRow) {
                    domStr += '<div class="row">';
                }
                domStr += '<div class="col-sm-6">';
                domStr += '<div class="card">';
                domStr += '<div class="imgContainer">';
                domStr += '<img class="img-fluid" src="https://elaspix.de/Lehre/VR/Aufgabe2/web_cloud_dev/pics/' + tier.imageurl + '" alt=' + tier.title + '/>';
                domStr += '<h5 class="centered"> ' + tier.title + '</h5>';
                domStr += '<img class="icn-round top-left" src="https://elaspix.de/Lehre/VR/Aufgabe2/web_cloud_dev/pics/' + getPicUrl(tier.futter, 1) + '" alt=' + tier.title + '/>';
                domStr += '</div>';
                domStr += '<div class="card-body">';
                domStr += '<p class="card-text">' + tier.text + '</p>';
                domStr += '</div></div></div>';
                if (!newRow) {
                    domStr += '</div>';
                }
                newRow = !newRow;
            }
            selectString += '</select>';
            domStr += '</div>'
            $("div#secondContainer").html(domStr);
            $("div#selectContainer").html(selectString);
            alert('Sehr unfertige Seite, kein Form zum Eingeben der Zahlungsdaten, wenig funktionalität');
        })
})
