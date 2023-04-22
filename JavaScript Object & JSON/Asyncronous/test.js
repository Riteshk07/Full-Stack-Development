
function runAsync(){
    setTimeout(()=>{console.log("task 1 is completed");},0);
}

function runSync(){
    for(let i=0; i<10; i++){
        console.log("Task 2")
    }
}

runAsync();
runSync();