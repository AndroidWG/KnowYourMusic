var SpotifyWebApi = require('spotify-web-api-js');

window.onload = function() {
    var url = window.location.href;
    var token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
    var state = url.match(/&(?:state)\=([\S\s]*?)$/)[1];

    console.log(token);

    var isStateEqual = localStorage.getItem("state") == state;
    console.log(isStateEqual)

    var sApi = new SpotifyWebApi();
    sApi.setAccessToken(token);
    sApi.getMySavedTracks()
        .then(function(data) {
            console.log(data.items[2].track.name);
        });
}