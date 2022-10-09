const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height:1.69,
    calcBmi: function(){
        this.bmi = this.weight/(this.height)**2;         
        return this.bmi;

    }
};
const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBmi: function(){
        this.bmi = this.weight/(this.height)**2;
        return this.bmi;
    }
};
if (john.calcBmi > mark.calcBmi){
console.log(`John's BMI ${john.calcBmi()} is higher than Mark's BMI ${mark.calcBmi()}`);
} else {
console.log(`Mark's BMI ${mark.calcBmi()}is higher than John's BMI ${john.calcBmi()}`);
}