var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_aguasca_1 = new ol.format.GeoJSON();
var features_aguasca_1 = format_aguasca_1.readFeatures(json_aguasca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aguasca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aguasca_1.addFeatures(features_aguasca_1);
var lyr_aguasca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aguasca_1, 
                style: style_aguasca_1,
                interactive: true,
                title: '<img src="styles/legend/aguasca_1.png" /> aguasca'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_aguasca_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_aguasca_1];
lyr_aguasca_1.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'zipcode': 'zipcode', 'station_name': 'station_name', });
lyr_aguasca_1.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'station_name': 'TextEdit', });
lyr_aguasca_1.set('fieldLabels', {'locality': 'header label', 'zonificacion': 'header label', 'station_code': 'header label', 'zipcode': 'header label', 'station_name': 'header label', });
lyr_aguasca_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});