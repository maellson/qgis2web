var format_airports_0 = new ol.format.GeoJSON();
var features_airports_0 = format_airports_0.readFeatures(json_airports_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airports_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_airports_0.addFeatures(features_airports_0);cluster_airports_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_airports_0
});var lyr_airports_0 = new ol.layer.Vector({
                source:cluster_airports_0, 
                style: style_airports_0,
                title: '<img src="styles/legend/airports_0.png" /> airports'
            });

lyr_airports_0.setVisible(true);
var layersList = [lyr_airports_0];
lyr_airports_0.set('fieldAliases', {'ID': 'ID', 'fk_region': 'fk_region', 'ELEV': 'ELEV', 'NAME': 'NAME', 'USE': 'USE', });
lyr_airports_0.set('fieldImages', {'ID': 'TextEdit', 'fk_region': 'TextEdit', 'ELEV': 'TextEdit', 'NAME': 'TextEdit', 'USE': 'TextEdit', });
lyr_airports_0.set('fieldLabels', {'ID': 'no label', 'fk_region': 'no label', 'ELEV': 'no label', 'NAME': 'no label', 'USE': 'no label', });
lyr_airports_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_airports_0.on("postcompose", update);

    var listenerKey = lyr_airports_0.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });