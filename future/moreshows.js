var allTheShows = $.ajax({
  url: "http://api.songkick.com/api/3.0/metro_areas/6404/calendar.json?apikey=xpjlsXbgSFS1QAgp",
  method: "GET",
  dataType: "json"
});

allTheShows.done(function(response) {
  var allShows = response["resultsPage"]["results"]["event"];
console.log(allShows);
  for (var i = 0; i < allShows.length; i++) {
    $("#moreConcerts").append("<tr><td>"+allShows[i]['displayName']+"</td></tr");
  }
})
