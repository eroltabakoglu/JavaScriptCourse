const bill = 275;

switch(bill){
    case bill >= 50 && bill <= 300 :
        tip = (bill*15)/100;
        sum = tip + bill;
        console.log(`Bill was ${bill},the tip was ${tip}, and the total value ${sum}`);
    case bill < 50 && bill > 300:
        tip = (bill*20)/100;
        sum = tip + bill;
        console.log(`Bill was ${bill},the tip was ${tip}, and the total value ${sum}`);
}
