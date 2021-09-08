const Client = require('./client');

if (typeof process.env.API_TOKEN === 'undefined') {
  console.log('Missing API_TOKEN');
  return;
}

const dyn = new Client(process.env.API_TOKEN);
dyn.listFiles()
    .then(response => console.log(response))
    .catch(error => console.log("Problem: " + error));
  
