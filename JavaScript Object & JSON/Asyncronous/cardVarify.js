


module.exports.verify = (card)=>{
    const promise = new Promise((resolve, reject)=>{
        if(!card){
            reject("Wrong Card Details")
        }
        setTimeout(()=>{
            // verifying card
            console.log("Card Verified");
            resolve(true);

        },4000);
        
    });
    return promise;
}