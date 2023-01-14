/*****************************************************
            M1 Unit 3 Lesson 2 Home Assignment
                    Unit Testing

Created by: Dev_Riri         Created Date: 14-JAN-2022
*****************************************************/

//Task 2: Conduct Automated Testing

//Initialize function testing source:
const bmiCalc = require("./bmi-calculator")

test("Check if UNDERWEIGHT: bmi lesser or equal 18", ()=>{
    expect(bmiCalc(34,151)).toBeLessThanOrEqual(18)
});

test("Check if NORMAL: bmi between 18 and 4.9", ()=>{
    expect(bmiCalc(46,151)).toBeGreaterThanOrEqual(18) &&
    expect(bmiCalc(46,151).toBeLessThanOrEqual(24.9))
});

test("Check if OVERWEIGHT: bmi between 25 and 29.9", ()=>{
    expect(bmiCalc(56, 141)).toBeGreaterThanOrEqual(25) &&
    expect(bmiCalc(56,141).toBeLessThanOrEqual(29.9))
});

test("Check if OBESE: bmi above or equal 30", ()=>{
    expect(bmiCalc(95,141)).toBeGreaterThanOrEqual(30)
});