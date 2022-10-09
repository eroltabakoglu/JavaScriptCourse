const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const Jonas = "I'm" + firstName + ', a ' + (year - birthYear) + 'years old'+ job + '!';
//to write all elements in together(ESXİ)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);


console.log('string with\n\
multiple\n\
lines');
//without \n
console.log(`String 
multiple 
lines`);