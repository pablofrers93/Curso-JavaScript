function* counter(){
    for (var i=1; i<=5; i++){
        yield i;
    }
}

let generator = counter();

function* retornador(){
    yield* counter();
    console.log("regresé");
    yield 3;
}

let g = retornador();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


