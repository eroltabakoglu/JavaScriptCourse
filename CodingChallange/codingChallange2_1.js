const calcAvarage = (point1,point2,point3) => (point1+point2+point3)/3;
const avgDolphins = calcAvarage(85,54,41);
const avgKoalas   = calcAvarage(23,34,27);

const checkWinner= function (avgDolphins,avgKoalas) {
    
 if(avgDolphins > 2*avgKoalas){
    console.log(`Dolhins win ${avgDolphins} vs. ${avgKoalas}`);
 } else if(avgKoalas > 2*avgDolphins)
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
 else {
    console.log(`no winner`);
 }
}