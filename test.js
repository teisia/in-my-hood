var songkick = $.ajax({
  url: "http://api.songkick.com/api/3.0/search/artists.json?query=chance-the-rapper&apikey=xpjlsXbgSFS1QAgp&jsoncallback=?",
  method: "GET",
  dataType: "jsonp"
})

songkick.done(function(concerts) {
  var artistID = concerts["resultsPage"]["results"]["artist"][0]["id"];
  var concertList = $.ajax({
    url: "http://api.songkick.com/api/3.0/artists/"+artistID+"/calendar.json?apikey=xpjlsXbgSFS1QAgp&jsoncallback=?",
    method: "GET",
    dataType: "jsonp"
  })

concertList.done(function(concerts) {
  console.log(concerts);
  console.log(artistID);
})
});
