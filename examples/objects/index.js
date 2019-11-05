var map = L.map('map', {
}).setView([55.702868, 37.530865], 13);

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

var baseMaps = {
  OSM: osmLayer,
};

// shadow icon
var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: './leaf-shadow.png',
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
  }
});
var greenIcon = new LeafIcon({iconUrl: './leaf-green.png'});

// html icon
// var customIcon = L.divIcon({
//   className: 'leaflet-div-icon',
//   html: ''
// });

L.marker([55.702868, 37.530865], {
  icon: greenIcon
})
.bindPopup('Здесь есть что то интересное')
.addTo(map);

L.control.layers(baseMaps, {}).addTo(map);
