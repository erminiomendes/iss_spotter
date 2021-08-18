const request = require('request-promise-native');

const fetchMyIP = function(callback) { 
    return request('https://api.ipify.org?format=json');
}
const fetchCoordsByIP = function(body) {
    const ip = JSON.parse(body).ip
    return request(`https://freegeoip.app/json/${ip}`)
};
// const fetchISSFlyOverTimes = function(body) {
//     const { latitude, longitude } = JSON.parse(body);
//     const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
//     return request(url);
// };

// const nextISSTimesForMyLocation = function() {
//     return fetchMyIP()
//       .then(fetchCoordsByIP)
//       .then(fetchISSFlyOverTimes)
//       .then((data) => {
//         const { response } = JSON.parse(data);
//         return response;
//       });
//   };
  
// module.exports = { nextISSTimesForMyLocation };

const fetchISSFlyOverTimes = (coordinates) => {
  const coords = (({latitude, longitude}) => ({latitude, longitude}))(JSON.parse(coordinates));
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = (passTimes) => {
  const times = JSON.parse(passTimes);

  for (const time of times.response) {
    console.log(`Next pass at ${new Date(time.risetime * 1000)} for ${time.duration} seconds!`);
  }
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation }