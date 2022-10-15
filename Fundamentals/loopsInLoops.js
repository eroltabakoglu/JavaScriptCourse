const jonas = [
    'jonas',
    'schmedtmann',
    2037- 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for(let i = jonas.length-1; i>=0; i--) {
    console.log(jonas[i]);
}
for (let exercise =1; exercise<4; exercise++){
    console.log(`---Starting exercise ${exercise}`);

    for(let rep =1;rep<6;rep++){
        console.log(`lifting weight repetition ${rep}`);
    }
}