(async function(){
    try{
        let promesa = await Promise.reject("error");
    } catch(err){
        console.log(err);
    }
})()