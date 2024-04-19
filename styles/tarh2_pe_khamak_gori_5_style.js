var size = 0;
var placement = 'point';
function categories_tarh2_pe_khamak_gori_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'LINE125':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,166,30,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LINE160':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(139,5,32,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LINE225':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,12,202,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LINE63':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,7,24,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LINE90':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(45,30,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'IJ-8in':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,194,203,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_tarh2_pe_khamak_gori_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Layer");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_tarh2_pe_khamak_gori_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
