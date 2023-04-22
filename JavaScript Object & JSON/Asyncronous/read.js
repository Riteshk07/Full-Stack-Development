
const fs =  require("fs");

function readData(printData){
    fs.readFile("data.txt",printData);
}

const printData = function(err, data){
    if(!err){
        console.log(data.toString());
    }
}

readData(printData);