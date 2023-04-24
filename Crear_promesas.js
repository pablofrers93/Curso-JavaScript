/*let promesa = new Promise(function(resolve, reject){
    resolve(10);
    reject("Algo salio mal");
}
*/

let request = require('request');

function leerPagina(url){
    return new Promise(function(resolve,reject){
        request(url,function(error,response){
           if(error) return reject(error);

           resolve(response);
        });
    });
}

let promesa = leerPagina("http://www.google.com");
promesa.then(r => console.log("finalice")).catch(err=>console.log(err));