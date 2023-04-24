let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, "hola mundo"));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, "segundo hola mundo"));

function finalizado(){
    console.log("Todo finalizó");
}

/*p1.then(function(r){
    console.log(r);
    p2.then(function(r2){
        console.log(r2);
        finalizado();
    })
}) 
*/
Promise.all([p1,p2]).then(function(resultados){
    console.log(resultados);
    finalizado();
});
