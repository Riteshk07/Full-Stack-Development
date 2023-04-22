function callDb(print){
    setTimeout(()=>{
        console.log("callback is done");
        print(50);
    },4000)
}
const print = function(data){
    console.log(data);
}

const x1  = callDb(print);
