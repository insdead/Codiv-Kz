let toUse = 0;
const apiurl = 'https://coronavirus-19-api.herokuapp.com/countries';

setInterval(async function(){ 
    const response = await fetch(apiurl);
    const data = await response.json();
    data_new = data.find(record => record.country === "Kazakhstan");
    toUse = data_new.cases;
}, 5000);


var defaults = {}
  , one_second = 1000
  , one_minute = one_second * 60
  , one_hour = one_minute * 60
  , one_day = one_hour * 24
  , startDate = new Date()
  , face = document.getElementById('lazy');

var requestAnimationFrame = (function() {
  return window.requestAnimationFrame       || 
         window.webkitRequestAnimationFrame || 
         window.mozRequestAnimationFrame    || 
         window.oRequestAnimationFrame      || 
         window.msRequestAnimationFrame     || 
         function( callback ){
           window.setTimeout(callback, 1000 / 60);
         };
}());

tick();

function tick() {

  var now = new Date()
    , elapsed = now - startDate
    , parts = [];

    parts[0] = toUse.toString() + ' cases only in Kazakhstan!';

  face.innerText = parts.join(':');
  
  requestAnimationFrame(tick);
  
}
