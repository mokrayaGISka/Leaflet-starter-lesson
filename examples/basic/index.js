var map = L.map('map', {
}).setView([55.702868, 37.530865], 10);

// https://a.tiles.mapbox.com/v4/mapbox.streets/2/1/1.png?access_token=pk.eyJ1IjoibGllZG1hbiIsImEiOiJjaXZ0NzEzMm0wMDNrMnlxZGtwZDhlb3V0In0.M3hMRRUB0CoqFEneKWVHKA

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

var spinalLayer = L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=db5ae1f5778a448ca662554581f283c5', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

var baseMaps = {
  OSM: osmLayer,
  Spinal: spinalLayer,
};

var marker1 = L.marker([55.702868, 37.530865], {
  // icon: greenIcon
  draggable: true,
})
.bindPopup('Какой то крутой текст!!!')
//.addTo(map);
var marker2 = L.marker([55.709868, 37.530865], {
  // icon: greenIcon
  draggable: true,
})
.bindPopup('Какой то крутой текст2!!!')
//.addTo(map);

var group = L.layerGroup([marker1, marker2])
.addTo(map);

L.control.layers(baseMaps, {
  'Университеты': group,
}).addTo(map);



