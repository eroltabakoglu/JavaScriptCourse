const marksWeight = 78;
const marksheight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

const marksBmi= marksWeight/(marksheight**2);
console.log( marksBmi);
const johnsBmi= johnsWeight/(johnsHeight**2);
console.log( johnsBmi);
const markHigherBMI = marksBmi>johnsBmi;

console.log(markHigherBMI);

