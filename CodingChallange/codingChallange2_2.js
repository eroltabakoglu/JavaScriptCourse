const calctip = function(bill){
    if(bill >= 50 && bill <= 300){
        const tip = bill*0.15;
        return tip; 
    } else {
        const tip = bill*0.20;
        return tip;
    } 
}
const bills= [125,555,44];
const tips = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])]; 
console.log(bills,tips);