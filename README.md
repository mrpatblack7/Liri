# Liri
## Requirements
- Make a Node.js app that depends on user input from the command line
- Integrate Twitter, Spotify, and OMDb APIs via the appropriate NPM modules
- Use API calls and parse through returned JSON objects, outputting them in a specified format
- Read commands and queries from file

## Technologies Used
- Node.js
- JavaScript
- Twitter API (via twitter npm module)
- Spotify API (via spotify npm module)
- OMDb API (via request npm module)

## Code Explanation
- Authentication keys for Twitter are stored in "keys.js", and we are exporting its contents to the main "liri.js" file
- What our app does depends on what the user types, and there are 4 main functions: (1) prints latest tweets, (2) Spotify lookup for a song, (3) OMDb lookup for a movie, and (4) read command and query from another file
- The program makes a request to the Twitter API that is limited by parameters -- username and number of tweets, and we get back a JSON object that includes an array of the 20 most recent tweets; from there, we selectively output using console.log
- The program also makes a request to the Spotify API, and we get back a JSON object that includes everything we need (artist(s), song, preview link, and album)
- The program also makes a HTTP request to the OMDb API using the request NPM module, and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.)
- The program also reads from a file called "random.text" and executes the command and query found there using string and array methods
- Appropriate comments and error-checking has been added

#Example

<img width="500" alt="pic1" src="https://user-images.githubusercontent.com/45779399/60772342-a2f77b80-a0ba-11e9-882d-74663fa4570b.png">

<img width="500" alt="Screen Shot 2019-07-07 at 12 38 09 PM" src="https://user-images.githubusercontent.com/45779399/60772357-de924580-a0ba-11e9-909c-8fa981abafea.png">

<img width="500" alt="Screen Shot 2019-07-07 at 12 36 34 PM" src="https://user-images.githubusercontent.com/45779399/60772365-f79af680-a0ba-11e9-8bec-ae1dd9ecdb91.png">

<img width="500" alt="Screen Shot 2019-07-07 at 12 37 30 PM" src="https://user-images.githubusercontent.com/45779399/60772371-07b2d600-a0bb-11e9-8c21-ecde371007ea.png">
