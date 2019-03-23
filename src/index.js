// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let obj = {};
    if (currency <= 0) {
        return(obj);
    }
    else if (currency > 10000) {
        return({error: "You are rich, my friend! We don't have so much coins for exchange"});
    }
    var h = Math.floor(currency/50);
    var q = Math.floor((currency % 50) / 25);
    var d = Math.floor(((currency % 50) % 25)/10);
    var n = Math.floor((((currency % 50) % 25)%10)/5);
    var p = (((currency % 50) % 25)%10) % 5;
    
    if (h != 0) {
       obj["H"] = h;
    }
    if (q != 0) {
        obj["Q"] = q;  
    }
    if (d != 0) {
        obj["D"] = d;
    }
    if (n != 0) {
        obj["N"] = n;
    }
    if (p != 0) {
        obj["P"] = p;
    }
    return(obj);
}
