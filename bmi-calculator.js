/*****************************************************
            M1 Unit 2 Lesson 1 Home Assignment
                    Git and Git Hub

Created by: Dev_Riri         Created Date: 25-NOV-2022
*****************************************************/

//Task: Create BMI Calculator
//BMI Formula: [weight (kg) / height (cm) / height (cm)] x 10,000
//Link: https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_1.html#:~:text=With%20the%20metric%20system%2C%20the,by%2010%2C000%2C%20can%20be%20used.

function calcBMI(weight, height) {
    let bmi = (weight/height/height * 10000).toFixed(2);

    if (bmi <= 18.5) {
            console.log(`Your BMI is ${bmi}. You are underweight`);
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log(`Your BMI is ${bmi}. You are in healthy state, keep it up`);
        }
        else if (bmi >= 25 && bmi <= 29.9){
            console.log(`Your BMI is ${bmi}. You are overweight. Please try to eat healthier and excercise`);
        }  
        else if (bmi >= 30){
            console.log(`Your BMI is ${bmi}. You are obese. Please try to eat healthy and excercise more`);
        } else {
            console.log(`Please enter a number`);
        }
    
    return parseInt(bmi);
}

calcBMI(56,151);


module.exports = calcBMI;