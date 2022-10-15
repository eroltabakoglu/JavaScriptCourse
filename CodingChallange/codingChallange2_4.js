//const bills = [22,295,176,440,37,105,10,1100,86,52];

/*const calctip = function(bills) {
    for(i = 0; i <10; i++){
        if(bills[i] >= 50 && bills[i] <=300){
           let tip = bills[i]*0.15;
           let total = bills[i] + tip;
           console.log(`for ${bills[i]} dollar bill, tip is ${tip} and total is ${total}`);
        } else {
            let tip = bills[i]*0.20
            let total = bills [i] + tip;
            console.log(`for ${bills[i]} dollar bill, tip is ${tip} and total is ${total}`);
        }
    }
}
console.log(calctip(bills));
*/
//Second Path
const calctip =function (bill) {
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.20;
}
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for (let i=0;i< bills.length;i++) {
    const tip = calctip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(bills.tips.totals);