window.data = [];
$(document).ready(function () {
    var url = "/api/v1/beaches";


    $.get(url, function (result) {
        window.data = result;
        sortByName(result)
    })
});

function refreshBeachList(beaches) {
    $("#beachList").empty();
    var list = "";
    for(var i=0; i<beaches.length; i++){
        list +="<dt><a href='/beaches/" + beaches[i].id + "'> "+beaches[i].name+"</a>&nbsp;&nbsp;&nbsp;Rating: "
            + beaches[i].rating + "/5" + "</dt>" + "<dd>"
            +beaches[i].shortDescription+"</dd>" + "<hr/>";
    }
    $("#beachList").append(list);
}

function searchByName() {
    var searchContent = $("#searchBar").val().toLowerCase();
    var optionText = $("#sort").find("option:selected").text();
    var filteredList = [];

    for(var i=0; i<window.data.length; i++){
        if (window.data[i].name.toLowerCase().indexOf(searchContent) >= 0) {
            filteredList.push(window.data[i]);
        }
    }

    if (optionText === "Name") {
        sortByName(filteredList)
    }
    else {
        sortByRating(filteredList)
    }

}

function sortList() {
    var optionText = $("#sort").find("option:selected").text();
    if (optionText === "Name") {
        sortByName(window.data)
    }
    else {
        sortByRating(window.data)
    }
}

function sortByName(beaches) {
    beaches.sort(by("name","rating"));
    refreshBeachList(beaches);
}

function sortByRating(beaches) {
    beaches.sort(byReverse("rating","name"));
    refreshBeachList(beaches);
}

var byReverse = function(major,minor){
    return function(o,p){
        var a,b;
        if(o && p && typeof o === 'object' && typeof p ==='object'){
            a = o[major];
            b = p[major];
            if(a === b){
                return typeof minor === 'function' ? minor(o,p):0;
            }
            if(typeof a === typeof b){
                return a > b ? -1:1;
            }
            return typeof a > typeof b ? -1 : 1;
        }else{
            throw("error");
        }
    }
};

var by = function(major,minor){
    return function(o,p){
        var a,b;
        if(o && p && typeof o === 'object' && typeof p ==='object'){
            a = o[major];
            b = p[major];
            if(a === b){
                return typeof minor === 'function' ? minor(o,p):0;
            }
            if(typeof a === typeof b){
                return a < b ? -1:1;
            }
            return typeof a < typeof b ? -1 : 1;
        }else{
            throw("error");
        }
    }
};

function initMap() {
    var url = "/api/v1/beaches";
    var data = [];
    $.get(url, function (result) {
        data = result;
        var myLatLng = {lat:data[1].latitude, lng: data[1].longitude};

        var bounds = new google.maps.LatLngBounds();

        var map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: 11,
            center: myLatLng
        });


        // Multiple Markers
        var markers = [];
        var infoWindowContent = [];
        for(i = 0;i < data.length; i++) {
            markers.push([data[i].name,data[i].latitude,data[i].longitude]);
            infoWindowContent.push(['<div class="info_content">' +
            '<h3>' + data[i].name + '</h3>' + '<p>' + data[i].shortDescription + '</p>' + '<br/>' +
            '<a href="/beaches/'+ data[i].id + '">Details</a>' + '</div>'])

        }
        console.log(infoWindowContent);

        // Info Window Content
        /*
        var infoWindowContent = [
            ['<div class="info_content">' +
            '<h3>London Eye</h3>' +
            '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
            ['<div class="info_content">' +
            '<h3>Palace of Westminster</h3>' +
            '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
            '</div>'],
                ['<div class="info_content">' +
            '<h3>Palace of Westminster</h3>' +
            '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
            '</div>']
        ];
        */

        // Display multiple markers on a map
        var infoWindow = new google.maps.InfoWindow(), marker, i;

        // Loop through our array of markers & place each one on the map
        for( i = 0; i < markers.length; i++ ) {
            var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: markers[i][0]
            });

            // Allow each marker to have an info window
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));
        }

    });

}