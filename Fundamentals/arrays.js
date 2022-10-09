const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends.length - 1);

friends[2]  = 'jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2022- 1991,'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const year = [1990, 1967,2002,2010,2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length-1]);
console.log(age1,age2,age3);

const ages = [calcAge(year[0]),calcAge(year[1]),calcAge(year[year.length-1])];
console.log(ages);

