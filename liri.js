require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var request = require("request");
var fs = require("fs");

var getArtist = function (artist) {
    return (artist.name);
}

var spotifyApi = function (song) {
    if (!song) {
        song = "I Want it That Way";
    }

    spotify.search(
        {
            type: "track",
            query: song
        },
        function (error, data) {
            if (error) {
                console.log("Error Occurred: ", error);
                return;
            }

            var songOutput = data.tracks.items;

            for (let i = 0; i < songOutput.length; i++) {
                console.log(i);
                console.log("Artist(s): " + songOutput[i].artists.map(getArtist));
                console.log("Song name: " + songOutput[i].name);
                console.log("Preview Song: " + songOutput[i].preview_url);
                console.log("Album: " + songOutput[i].album.name);
            }
        }
    );
};

var getBands = function (artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var jsonData = JSON.parse(body);

            if (!jsonData.length) {
                console.log("Sorry, No results found for" + artist + ".");
                return;
            }

            console.log("Upcoming concerts for " + artist + ":");

            for (let i = 0; i < jsonData.length; i++) {
                var show = jsonData[i].venue;

                console.log(show.city, show.region, show.country, "at ", show.name);
            }
        }
    });
};

var getMovie = function (movieName) {
    if (!movieName) {
        movieName = "Mr Nobody";
    }

    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var jsonData = JSON.parse(body);

            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating:" + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
        }
    });
};

var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);

        var dataArr = data.split(",");

        if (dataArr.length === 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length === 1) {
            pick(dataArr[0]);
        }
    });
};

var pick = function (caseData, functionData) {
    switch (caseData) {
        case "concert-this":
            getBands(functionData);
            break;
        case "spotify-this-song":
            spotifyApi(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("LIRI doesn't know that");
    }
};

var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv.slice(3).join(' '));
