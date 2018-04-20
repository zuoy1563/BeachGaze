function initMap() {
    var myLatLng = {lat: data[1].longitude, lng: data[1].latitude};

    var bounds = new google.maps.LatLngBounds();

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 14,
        center: myLatLng
    });


    // Multiple Markers
    var markers = [];
    var infoWindowContent = [];

    for(i = 0;i < data.length; i++) {
        markers.push([data[i].name,data[i].longitude,data[i].latitude])
        infoWindowContent.push(['<div class="info_content">' +
        '<h3>' + data[i].name + '</h3>' + '<p>' + data[i].shortDescription + '</p>'] + '</div>')
    }

    // Info Window Content
    /*
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
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

}