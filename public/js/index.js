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
  var tickets = response[i]["ticket_url"];
  console.log(tickets);
  //if(datesArray[i] === datesArray[i + 1])
 for (var j = 0; j < artistNumber; j++) {
$("#concertList").append("<tr><td id='date'>"+dateNicer+"</td></tr><tr><td><img src='"+response[i]['artists'][j]['thumb_url']+"'/></td><td id='name'>"+response[i]['artists'][j]['name']+"<br>"+response[i]['venue']['name']+" - "+response[i]['venue']['city']+", "+response[i]['venue']['region']+"</td><br><td><button id='more'>get tickets</button></td></tr>");
 }
 }
 }
})
})
})

$("#firstDown").click(function() {
   $('html, body').animate({
       scrollTop: $(".search").offset().top
   }, 500);
});

$("#buttoni").click(function() {
   $('html, body').animate({
       scrollTop: $(".results").offset().top
   }, 500);
});

$("#up").click(function() {
   $('html, body').animate({
       scrollTop: $(".search").offset().top
   }, 500);
});
