# Utility Twilio Functions for What3Words Address

This project provides the basic utility functions to build out a Twilio Application to get what3words address

GoogleMaps Place to Coordinate endpoint allows you to find the coordinate for a place
What3Words endpoints allows you to 
- convert coordinate to what three words
- convert 3 words address to coordinates

## Set up

### Requirements

- [Node.js](https://nodejs.org/)
- A Twilio account - [sign up](https://www.twilio.com/try-twilio)
- Google API Account 
- What 3 Words Account

### Environment Variables

| Config Value | Description |
| :--| :-- |
| ACCOUNT_SID   | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console)|
| AUTH_TOKEN    | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console)|
| W3W_APIKEY    | Used to call What3Words API - [Learn to get started here](https://developer.what3words.com/public-api/docs#overview)|
| GOOGLE_APIKEY | Used to call Googla API - [get one from Google API](https://developers.google.com/places/web-service/get-api-key)|

## Available Endpoint

### Google Maps

/googlemaps/coordinates

| Parameters | Description | Example |
| :-- | :-- | :-- |
| `place` | String value of Place to look up. This can be an address or Place Name | Sydney Opera House

### What 3 Words

**/what3words/to-coord**

| Parameters | Description | Example |
| :-- | :-- | :-- |
| `w3wwords` | What 3 Words address. | tiny.loses.tree

**/what3words/to-w3words**

| Parameters | Description | Example |
| :-- | :-- | :-- |
| `coordinates` | Latitude Longitude Coordinates you want the What3Words address for | -33.8567844,151.2152967
