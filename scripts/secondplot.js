// Load in GeoJSON
var ort = null;
$.ajax({
    'async': false,
    'global': false,
    'url': "../data/inhabitantmap.geojson",
    'dataType': "json",
    'success': function (data) {
        ort = data;
        console.log("Municipality data successfully loaded");
    }
});

// Load Map
$.when(ort).done(function() {
    var map = L.map('map')
        .setView([47.47, 13.56], 7);
  // Base map
    var basemap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.light'
    }).addTo(map);

  // Declare popup
  var popup = L.popup();

  // Longitude and Latitude for popup
  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString() +
                      " ")
          .openOn(map);
  }
  map.on('click', onMapClick);


  // Info panel
  var info = L.control();

  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
  };

  info.update = function (props) {
    this._div.innerHTML = '<h4>EinwohnerInnen nach Gemeinde</h4>' +  (props ?
      '<b>' + props.name + '</b><br />' +
       props.downloaded_einwohner.toLocaleString('de', {useGrouping:true}) +
       ' EinwohnerInnen'
       //props.einwohnerdaten_einwohner
      : 'W&auml;hlen Sie eine Gemeinde');
  };

  info.addTo(map);

  // style Hover

  // get color depending on population density value


  function getColor(d) {
    return d > 200000 ? '#800026' :
        d > 100000  ? '#BD0026' :
        d > 25000  ? '#E31A1C' :
        d > 10000  ? '#FC4E2A' :
        d > 1000   ? '#FD8D3C' :
        d > 200   ? '#FEB24C' :
        d > 10   ? '#FED976' :
              'grey';
  }

// // placeholder: static color
//
// function getColor(d){
// 	return '#39ba30';
// }

  function style(feature) {
    return {
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '1',
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.downloaded_einwohner)
    };
  }

  L.geoJson(ort, {style: style}).addTo(map);


  // hover functionality

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }

    info.update(layer.feature.properties);
  }

  var geojson;

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
    });
  }

  geojson = L.geoJson(ort, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map);

});
