//M1 Unit > Task 1-2 > Case 3
//Conditionals and Loops
//Task 1: Pulse oximeter reading
function get_oxygen_saturation(reading){
    if (reading >= 96){
        return console.log("Normal reading.");
    } else if (reading == 95){
        return console.log("Acceptable to continue home monitoring");
    } else if ((reading == 93) || (reading == 94)) {
        return console.log("Seek advice from health professionals");
    } else if (reading <= 92) {
        return console.log("Seek urgent medical advice");
    } else {
        return console.log("Kindly try to test again");     //if passed by characters or null values
    }
}

//testing function
get_oxygen_saturation(95);

//Task 2: Pulse oximeter reading
function get_oximeter_reading(pulse){ 
    if ((pulse >= 40) && (pulse <= 100)){                 //mathematical equivalent of word between or range
        console.log("Normal Reading");       
    } else if ((pulse >= 101) && (pulse <= 109)){
        console.log("Acceptable to continue home monitoring");
    } else if ((pulse >= 110) && (pulse <= 130)){
       console.log("Seek advice from health professionals"); 
    } else if (pulse >= 131){
        console.log("Seek urgent medical advice");
    } else {
        console.log("Sorry, I can't comprehend your input. Please try again");      //if passed by characters or null values
    }
}

//testing function
get_oximeter_reading("asd");

