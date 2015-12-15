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

//var datesArray = [];

ll.done(function (response) {
  if (response.length === 0) {
    $("#no").append("<div>"+"There are no concerts related to this artist in your hood."+"</div>");
  } else {
for (var i = 0; i < response.length; i++) {
  var artistNumber = response[i]["artists"].length;
  var dateCat = (response[i]["datetime"]).substring(0,10);
  //datesArray.push(dateCat);
  var dateNice = response[i]["formatted_datetime"];
  var dateNicer = dateNice.substring(0, dateNice.length - 16);
  //if(datesArray[i] === datesArray[i + 1])
 for (var j = 0; j < artistNumber; j++) {
$("#date").append("<div>"+dateNicer+"</div>");
$("#thumb").append("<div><img src='"+response[i]['artists'][j]['thumb_url']+"'/></div>");
$("#concert").append("<div>"+response[i]['artists'][j]['name']+"<br>"+response[i]['venue']['name']+" - "+response[i]['venue']['city']+", "+response[i]['venue']['region']+"</div>");
 }
 }
 }
})
})
})
