function primerPromesa(){
    return new Promise((resolve, reject)=> setTimeout(resolve, 100,"mensaje de la primer promesa"));
}

function segundaPromesa(r2){
    console.log(r2);
    return new Promise((resolve, reject)=> setTimeout(resolve, 600,"segundo hola mundo"));
}

primerPromesa().then(segundaPromesa).then(function(r){console.log(r)});

function finalizado(){
    console.log("todo finalizó");
}

