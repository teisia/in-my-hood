

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
var previewIcon = "speaker.png";
var ticketIcon = "ticket.png";
var ll = $.ajax ({
  url: "https://api.bandsintown.com/artists/"+artist.value+"/events/recommended?location="+latlng+"&radius=20&app_id=in-my-hood&api_version=2.0&format=json",
  method: "GET",
  dataType: "jsonp"
})

ll.done(function (response) {
  if (response.length === 0) {
    $("#no").append("<div>"+"sorry, there are no concerts related to this artist in your hood."+"<br><br><iframe src='giphy.gif' frameBorder='0'></iframe></div>");
  } else {
for (var i = 0; i < response.length; i++) {
  var artistNumber = response[i]["artists"].length;
  var dateCat = (response[i]["datetime"]).substring(0,10);
  var dateNice = response[i]["formatted_datetime"];
  var dateNicer = dateNice.substring(0, dateNice.length - 16);
  var tickets = response[i]["ticket_url"];

 for (var j = 0; j < artistNumber; j++) {
     var artistname = response[i]['artists'][j]['name'];
     var preview = $.ajax ({
       url: "https://itunes.apple.com/search?term="+response[i]['artists'][j]['name']+"",
       method: "GET",
       dataType: "jsonp"
       })
     console.log("response["+i+"]['artists']["+j+"]['name'] = "+response[i]['artists'][j]['name']);
       console.log("artistname = "+artistname);
$("#concertList").append("<tr><td id='date'>"+dateNicer+"</td></tr><tr><td><img src='"+response[i]['artists'][j]['thumb_url']+"'/></td><td id='name'>"+response[i]['artists'][j]['name']+"<br>"+response[i]['venue']['name']+" - "+response[i]['venue']['city']+", "+response[i]['venue']['region']+"<br><div class='prevTrack'><img id='"+artistname+"'class ='speaker' src='"+previewIcon+"'/></div><a href='"+tickets+"' onclick='window.open(this.href); return false;'><div id='more'><img id= 'ticket' src='"+ticketIcon+"'></div></a></td></tr>");

preview.done(function(payload) {
  $(".speaker").click(function() {
    $("#concertList").remove("tr");
    if(this.id === payload["results"][0]["artistName"]) {
       var previewOne = payload["results"][0];
         $(this).parents("td").append("<tr><td><audio src='"+previewOne['previewUrl']+"' controls></audio></td></tr>");
    }
 })
})
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
   $("#concertList").empty();
   $("#no").empty();
});
