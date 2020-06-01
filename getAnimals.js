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
    console.log("Starting");
    $.getJSON("https://webtechlecture.appspot.com/cloudstore/listobjects",
        {owner: 'futterapp'},
        function (data) {
            var newRow = true;
            var domStr = '<h2> Unsere Stars</h2>';
            for (var idx in data) {
                var tier = data[idx].jsonstring;
                if (newRow) {
                    domStr += '<div class="row">';
                }
                domStr += '<div class="col-6">';
                domStr += '<div class="card">';
                domStr += '<img class="card-img-top" src="https://elaspix.de/Lehre/VR/Aufgabe2/web_cloud_dev/pics/' + tier.imageurl + '" alt=' + tier.title + '/>';
                domStr += '<div class="card-body">';
                domStr += '<h5 class="card-title">' + tier.title + '</h5>';
                domStr += '<p class="card-text">' + tier.text + '</p>';
                domStr += '</div></div></div>';
                if (!newRow) {
                    domStr += '</div>';
                }
                newRow = !newRow;
            }
            console.log("Done");
            $("div#secondContainer").html(domStr);
            // create new dom elements
        })
})
/*$(document).ready(function () {
    alert("Hans");
})*/
