Dolphins = (97+112+101)/3;
Koalas   = (109+95+123)/3;
console.log(`Score of the Dolphins is ${Dolphins}`);
console.log(`score of the Koalas is ${Koalas}`);
if(Dolphins > 100 && Dolphins > Koalas){
    console.log("Dolphins is win");
}else if(Koalas > 100 && Koalas > Dolphins){
    console.log("Koalas is win");
}else if(Koalas === Dolphins){
    console.log("it's Draw");
}else{
    console.log("No winners");
}