var paragraph = '';
var regex = /.+?(?=<OTA_AirLowFareSearchRQ)(<OTA_AirLowFareSearchRQ.*)/;
//var paragraph = 'a "witch" and her "broom" is one';
//var regex = /".+?"/g
var found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
