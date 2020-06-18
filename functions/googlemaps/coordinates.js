const twilio_version = require('twilio/package.json').version;
const {Client, Status, PlaceInputType} = require('@googlemaps/google-maps-services-js');

exports.handler = async function(context, event, callback) {

  console.log(`Entered ${context.PATH} node version ${process.version} twilio version ${twilio_version}`);

  const GOOGLE_APIKEY = context.GOOGLE_APIKEY;

  // Start Code Here
  let result = {};

  const client = new Client();
  try {
    const resFindPlace = await  client.findPlaceFromText({
                            params: {
                              input: event.place,
                              key: GOOGLE_APIKEY,
                              inputtype: PlaceInputType.textQuery,
                              fields: [
                                'place_id'
                              ]
                            }
                          });
    
    let place_id = null;
    if(resFindPlace.data.status === Status.OK) {
      console.log(`Place ID is ${resFindPlace.data.candidates[0].place_id}`);
      place_id = resFindPlace.data.candidates[0].place_id
    }

    const resDetails = await client.placeDetails({
      params: {
        key: GOOGLE_APIKEY,
        place_id: place_id,
        fields: [
          'geometry',
          'formatted_address'
        ]
      }
    })

    if(resDetails.data.status === Status.OK ) {
      result.status = 'OK'
      result.coordinates = `${resDetails.data.result.geometry.location.lat},${resDetails.data.result.geometry.location.lng}`
      result.formatted_address = resDetails.data.result.formatted_address
      console.log(`Place Lat ${result.coordinates}`);
    }

  } catch (e) {
    console.log(`Error: ${e}`);
    result.status = 'ERROR'
    result.message = e
  }

  callback(null, result);
};