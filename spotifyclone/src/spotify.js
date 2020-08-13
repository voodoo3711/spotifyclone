// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authendpoint = "https://accounts.spotify.com/authorize";

const redirecturi ="http://localhost:3002/";

const clientid ="8765545b25344f0095aa282cbadd8093"

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",    
];

export const Loginurl =`${authendpoint}?client_id=${clientid}&redirect_uri=${redirecturi}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;