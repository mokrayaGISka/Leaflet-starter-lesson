var map = L.map('map', {
}).setView([55.702868, 37.530865], 3);

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

var baseMaps = {
  OSM: osmLayer,
};

L.control.layers(baseMaps, {}).addTo(map);


addressPoints = addressPoints.map(function (p) {
  return [p[0], p[1]];
});

var heat = L.heatLayer(addressPoints, {
}).addTo(map);