
// index.js
// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   //const passTimesObject = JSON.parse(ip);

//   console.log('It worked! Returned IP:' , ip);
// });



const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error || !passTimes) {
    return console.log("It didn't work!", error);
  }
  // print out
  const passTimesObject = JSON.parse(passTimes);

  for (const time of passTimesObject.response) {
    console.log(`Next pass at ${new Date(time.risetime * 1000)} for ${time.duration} seconds!`);
  }
});





