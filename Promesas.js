let request = require('request-promise');

let promesa =request(2)

promesa.then(function() {console.log("Terminé la petición")})
    .catch(function(err) {console.log(err)})
    .finally(function(err) {console.log("Finalicé")});   


console.log("Yo sucedo después");