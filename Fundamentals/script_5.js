// 5 falsy values: 0, ``, undefined, null, NuN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if(money){
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job!');
}
let height;

if(height){
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFİNED')
};
const favourite=Number(prompt("What's ypur favourite number'"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {//'23' === 23 -> FALSE)
    console.log('Cool!23 is an amazing number')
}