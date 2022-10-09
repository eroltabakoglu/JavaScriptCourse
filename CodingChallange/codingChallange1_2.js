const marksWeight = 78;
const marksheight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

const marksBmi= marksWeight/(marksheight**2);
const johnsBmi= johnsWeight/(johnsHeight**2);
if (marksBmi > johnsBmi){
    console.log(`Mark's BMI ${marksBmi} is higher than John's ${johnsBmi}`);
} else{
    console.log(`Jons's BMI is ${johnsBmi} is higher than Mark's`);
}

