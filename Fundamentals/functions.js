function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

//function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear){
    return 2037-birthYear;
}
//function expression
const calcAge2 = function(birthYear){
    return 2037-birthYear;
}
const age2 = calcAge2(1991);
console.log(age1,age2);


//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3= calcAge3(1991);
console.log(age3);

const yearsUntilRetirement =(birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit){
    return fruit *4;
}

function fruitProcessor(apples,oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges,`;
    return juice;
}
fruitProcessor(2,3);


