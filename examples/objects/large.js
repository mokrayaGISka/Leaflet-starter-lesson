var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

var markers = L.markerClusterGroup({ chunkedLoading: true, });
var markerList = [];

for (var i = 0; i < addressPoints.length; i++) {
  var a = addressPoints[i];
  var title = a[2];
  var marker = L.marker(L.latLng(a[0], a[1]), { title: title });
  marker.bindPopup(title);
  markerList.push(marker);
}
for (var i = 0; i < addressPoints2.length; i++) {
  var a = addressPoints2[i];
  var title = a[2];
  var marker = L.marker(L.latLng(a[0], a[1]), { title: title });
  marker.bindPopup(title);
  markerList.push(marker);
}

markers.addLayers(markerList);
map.addLayer(markers);

L.Control.geocoder().addTo(map);