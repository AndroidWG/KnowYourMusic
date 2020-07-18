var client_id = '6913b4915ca5443680156629b87a2eef';
var redirect_uri = 'http://127.0.0.1:5500/loggedin.html';
var scopes = 'streaming user-library-read';

function loginUser() {
    var state = generateRandomString(24);
    localStorage.setItem("state", state);

    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&state=${state}`);
}

//from https://github.com/spotify/web-api-auth-examples/blob/master/authorization_code/app.js
function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};