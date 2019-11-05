var map = L.map('map', {
}).setView([55.702868, 37.530865], 13);

// 
var osmLayer = L.tileLayer('https://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGllZG1hbiIsImEiOiJjaXZ0NzEzMm0wMDNrMnlxZGtwZDhlb3V0In0.M3hMRRUB0CoqFEneKWVHKA', {
  attribution: '&copy; <a href="copyright">Mapbox</a>'
}).addTo(map);

var baseMaps = {
  OSM: osmLayer,
};

L.control.layers(baseMaps, {}).addTo(map);

var startPoint = null;
var endPoint = null;
var startMarker = null;
var endMarker = null;
var line = null;

var createLine = function (start, end, curve) {
  if (line) {
    line.remove();
  }

  if (start && end) {
    if (curve) {
      line = L.Polyline.Arc([start.lat, start.lng], [end.lat, end.lng]).addTo(map);
    } else {
      line = L.polyline([start, end]).addTo(map);
    }
  };

};

map.on('click', function (e) {
  if (startPoint === null && endPoint === null) {
    startPoint = e.latlng;

    if (startMarker) { startMarker.remove();}
    startMarker = L.marker(startPoint, {
      // draggable: true,
    }).addTo(map);
  } else {
    endPoint = e.latlng;

    if (endMarker) { endMarker.remove();}
    endMarker = L.marker(endPoint, {
      // draggable: true,
    }).addTo(map);

    // endMarker.on('move', e => {
    //   createLine(startPoint, endPoint);
    // });
  } 

  createLine(startPoint, endPoint, true);
});

