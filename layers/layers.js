ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32641").setExtent([356956.014989, 3417715.673180, 375837.824790, 3429698.869442]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32641'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "کروکی های اسفند ماه",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> کروکی های اسفند ماه'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32641'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "کروکی های بهمن ماه",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> کروکی های بهمن ماه'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32641'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "کروکی های فروردین ماه",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> کروکی های فروردین ماه'
            });
var format_tarh2_pe_khamak_gori_5 = new ol.format.GeoJSON();
var features_tarh2_pe_khamak_gori_5 = format_tarh2_pe_khamak_gori_5.readFeatures(json_tarh2_pe_khamak_gori_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32641'});
var jsonSource_tarh2_pe_khamak_gori_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tarh2_pe_khamak_gori_5.addFeatures(features_tarh2_pe_khamak_gori_5);
var lyr_tarh2_pe_khamak_gori_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tarh2_pe_khamak_gori_5, 
                style: style_tarh2_pe_khamak_gori_5,
                popuplayertitle: "tarh2_pe_khamak_gori",
                interactive: true,
    title: 'tarh2_pe_khamak_gori<br />\
    <img src="styles/legend/tarh2_pe_khamak_gori_5_0.png" /> LINE125<br />\
    <img src="styles/legend/tarh2_pe_khamak_gori_5_1.png" /> LINE160<br />\
    <img src="styles/legend/tarh2_pe_khamak_gori_5_2.png" /> LINE225<br />\
    <img src="styles/legend/tarh2_pe_khamak_gori_5_3.png" /> LINE63<br />\
    <img src="styles/legend/tarh2_pe_khamak_gori_5_4.png" /> LINE90<br />\
    <img src="styles/legend/tarh2_pe_khamak_gori_5_5.png" /> IJ-8in<br />'
        });
var format_Line90_6 = new ol.format.GeoJSON();
var features_Line90_6 = format_Line90_6.readFeatures(json_Line90_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32641'});
var jsonSource_Line90_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line90_6.addFeatures(features_Line90_6);
var lyr_Line90_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Line90_6, 
                style: style_Line90_6,
                popuplayertitle: "Line90",
                interactive: true,
                title: '<img src="styles/legend/Line90_6.png" /> Line90'
            });
var format_Line63_7 = new ol.format.GeoJSON();
var features_Line63_7 = format_Line63_7.readFeatures(json_Line63_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32641'});
var jsonSource_Line63_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line63_7.addFeatures(features_Line63_7);
var lyr_Line63_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Line63_7, 
                style: style_Line63_7,
                popuplayertitle: "Line63",
                interactive: true,
                title: '<img src="styles/legend/Line63_7.png" /> Line63'
            });
var format_Line160_8 = new ol.format.GeoJSON();
var features_Line160_8 = format_Line160_8.readFeatures(json_Line160_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32641'});
var jsonSource_Line160_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line160_8.addFeatures(features_Line160_8);
var lyr_Line160_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Line160_8, 
                style: style_Line160_8,
                popuplayertitle: "Line160",
                interactive: true,
                title: '<img src="styles/legend/Line160_8.png" /> Line160'
            });
var format_Line125_9 = new ol.format.GeoJSON();
var features_Line125_9 = format_Line125_9.readFeatures(json_Line125_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32641'});
var jsonSource_Line125_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line125_9.addFeatures(features_Line125_9);
var lyr_Line125_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Line125_9, 
                style: style_Line125_9,
                popuplayertitle: "Line125",
                interactive: true,
                title: '<img src="styles/legend/Line125_9.png" /> Line125'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_tarh2_pe_khamak_gori_5.setVisible(true);lyr_Line90_6.setVisible(true);lyr_Line63_7.setVisible(true);lyr_Line160_8.setVisible(true);lyr_Line125_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr__2,lyr__3,lyr__4,lyr_tarh2_pe_khamak_gori_5,lyr_Line90_6,lyr_Line63_7,lyr_Line160_8,lyr_Line125_9];
lyr__2.set('fieldAliases', {'SDN': 'SDN', });
lyr__3.set('fieldAliases', {'SDN': 'SDN', });
lyr__4.set('fieldAliases', {'SDN': 'SDN', });
lyr_tarh2_pe_khamak_gori_5.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', });
lyr_Line90_6.set('fieldAliases', {'Entity': 'Entity', 'Le': 'Le', });
lyr_Line63_7.set('fieldAliases', {'LE': 'LE', });
lyr_Line160_8.set('fieldAliases', {'Lenght': 'Lenght', });
lyr_Line125_9.set('fieldAliases', {'Field': 'Field', 'Le': 'Le', });
lyr__2.set('fieldImages', {'SDN': 'TextEdit', });
lyr__3.set('fieldImages', {'SDN': 'TextEdit', });
lyr__4.set('fieldImages', {'SDN': 'TextEdit', });
lyr_tarh2_pe_khamak_gori_5.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', });
lyr_Line90_6.set('fieldImages', {'Entity': 'TextEdit', 'Le': 'TextEdit', });
lyr_Line63_7.set('fieldImages', {'LE': 'TextEdit', });
lyr_Line160_8.set('fieldImages', {'Lenght': 'TextEdit', });
lyr_Line125_9.set('fieldImages', {'Field': 'TextEdit', 'Le': 'TextEdit', });
lyr__2.set('fieldLabels', {'SDN': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'SDN': 'no label', });
lyr__4.set('fieldLabels', {'SDN': 'no label', });
lyr_tarh2_pe_khamak_gori_5.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', });
lyr_Line90_6.set('fieldLabels', {'Entity': 'no label', 'Le': 'no label', });
lyr_Line63_7.set('fieldLabels', {'LE': 'no label', });
lyr_Line160_8.set('fieldLabels', {'Lenght': 'no label', });
lyr_Line125_9.set('fieldLabels', {'Field': 'no label', 'Le': 'no label', });
lyr_Line125_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});