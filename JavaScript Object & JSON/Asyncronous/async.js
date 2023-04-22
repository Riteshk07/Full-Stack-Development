function printcb(data){
    setTimeout(()=>{
        console.log(data);
        return 50;
    },4000)
}

const x1  = printcb("This is Ritesh");

console.log(x1);