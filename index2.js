
// const { nextISSTimesForMyLocation } = require('./iss_promised')
// const printPassTimes = require('./index')

// nextISSTimesForMyLocation()
//     .then((passTimes) => {
//         printPassTimes(passTimes);
//     })
//     .catch((error) => {
//         console.log("Is not working: ", error.message);
//     });

const { fetchMyIP , fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(nextISSTimesForMyLocation)
  .catch(error => console.log("It didn't work: ", error.message));