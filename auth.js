// var obj = JSON.parse(json);


const request = require('request');

request('https://odeshabot.xyz/app/auth?key=AS2O86ZhlXlTPqxT', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
//   console.log(obj.login)
  console.log(body);
  
});



