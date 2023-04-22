const cardVar = require("./cardVarify");

// placing and deducted the amount for order

function getCardDetails(){
    //read card from input
    console.log("card Recieved");
    console.log("getting card Details");
    const cardnum = "8965 4562 9863 6641"; 
    const promise = cardVar.verify(cardnum);
    console.log(promise);
    // using than function
    promise.then(
        // execute when promise is resolved
        (result)=>{
            console.log(result);
            deductMoney()
        },
        // execute when promise is rejected
        (err)=>{
            console.log(err);
        }
    );
    console.log("completed");
}

function deductMoney(){
    // deducting money
    
    console.log("amount Detucted");
}

function placeOrder(){
    console.log("order placed");
}

getCardDetails();