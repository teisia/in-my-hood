var gMap = $.ajax ({
url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCQilPj6BWogLeB6QgDBqI7HuownF92CzA",
method: "POST"
})

gMap.done(function (response) {
var lat = response["location"]["lat"];
var lng = response["location"]["lng"];
console.log(lat + "," + lng);
var ll = $.ajax ({
  url: "http://api.songkick.com/api/3.0/search/locations.json?location="+lat+","+lng+"&apikey=xpjlsXbgSFS1QAgp",
  method: "GET",
  dataType: "jsonp"
})

ll.done(function (response) {
var locID = response["resultsPage"]["results"]["location"];
for (var i = 0; i < locID.length; i++) {
console.log(locID[i]["metroArea"]["id"]);
 }
})
})
