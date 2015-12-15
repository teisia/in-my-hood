$("#spotify").click(function() {
  var spotify = $.ajax ({
  url: "https://accounts.spotify.com/authorize/?client_id=f7d9bdf5ca604d9cbdb868882b3bd4ab&response_type=code&redirect_uri=https%3A%2F%2Fkimye-checkers.firebaseapp.com%2F",
  method: "GET",
  dataType: "jsonp"
})

spotify.done(function (response) {
  console.log("meep meep");
})

spotify.fail(function (response) {
  console.log("nope nope");
  })
})

//not working yet
