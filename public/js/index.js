var gMap = $.ajax ({
url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCQilPj6BWogLeB6QgDBqI7HuownF92CzA",
method: "POST"
})

gMap.done(function (response) {
var lat = response["location"]["lat"] + ",";
var lng = response["location"]["lng"];
var latlng = lat.concat(lng);
var artist = document.getElementById('artistField');
console.log(latlng);

$("#buttoni").click(function() {
var ll = $.ajax ({
  url: "https://api.bandsintown.com/artists/"+artist.value+"/events/recommended?location="+latlng+"&radius=20&app_id=in-my-hood&api_version=2.0&format=json",
  method: "GET",
  dataType: "jsonp"
})

ll.done(function (response) {
for (var i = 0; i < response.length; i++) {
//console.log(artist.value);
$("#stuff").append("<div>"+response[i]['title']+"</div>");
 }
})
})
})
//this works
