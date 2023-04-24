let request = require('request');

request('http://www.google.com', function(){
    console.log('Terminé la petición');
})

console.log("Yo sucedo después");