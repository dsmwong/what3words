const twilio_version = require('twilio/package.json').version;
const got = require('got'); 

const W3W_URL = 'https://api.what3words.com/v3/convert-to-coordinates'

exports.handler = async function(context, event, callback) {

  console.log(`Entered ${context.PATH} node version ${process.version} twilio version ${twilio_version}`);

  console.log(context.W3W_APIKEY);
  console.log(event.w3wwords);

  const w3w_json = await got(W3W_URL, 
  {
    searchParams: {
      words: event.w3wwords
    },
    headers: {
      'X-Api-Key': context.W3W_APIKEY
    }
  }).json()
  
  console.log(w3w_json);

  callback(null, w3w_json);
};