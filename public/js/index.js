var gMap = $.ajax ({
url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCQilPj6BWogLeB6QgDBqI7HuownF92CzA",
method: "POST"
})

gMap.done(function (response) {
var lat = response["location"]["lat"] + ",";
var lng = response["location"]["lng"];
var latlng = lat.concat(lng);
var artist = document.getElementById('artistField');

$("#buttoni").click(function() {
var ll = $.ajax ({
  url: "https://api.bandsintown.com/artists/"+artist.value+"/events/recommended?location="+latlng+"&radius=20&app_id=in-my-hood&api_version=2.0&format=json",
  method: "GET",
  dataType: "jsonp"
})

ll.done(function (response) {
for (var i = 0; i < response.length; i++) {
  var artistNumber = response[i]["artists"].length;
 for (var j = 0; j < artistNumber; j++) {
$("#thumb").append("<div><img src='"+response[i]['artists'][j]['thumb_url']+"'/></div>");
$("#concert").append("<div>"+response[i]['artists'][j]['name']+"<br>"+response[i]['venue']['name']+" - "+response[i]['venue']['city']+", "+response[i]['venue']['region']+"</div>"+"<br><br>")
 }
 }
})
})
})
//this works
