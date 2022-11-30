//M1_L1_HA_Variables and Data Types
//Case 1 - Calorie Tracking App
//Goal: Keep record of users activities and monitor the number of calories they lose after performing the activity

function calc_calories_burned(minutes, days, activity){
    //declare variables first
    let calories_burned = 0;
    let hour = 0;
    let calories = 0;
    
    //calculation
    calories = get_calorie_count(activity, minutes); //call second function with parameters needed
    calories_burned = calories*days;
    hour = minutes/60;
    
    //output
   console.log(`Great work, Sam! After ${hour} hours of running every day for a week, you may lose a total of ${calories_burned} calories`);
}

function get_calorie_count(activity, minutes_spent){
	//declare variables first
    let calorie_count = 0;

    //try cases: running or cycling based on the problems given
	switch(activity){
  	case "running":
    	calorie_count = 500/30; //calorie count from 1st problem
      break;
    case "cycling":
    	calorie_count = 225/30; //calorie count from 2nd problem
      break;
	}
  return (calorie_count*minutes_spent);
}

//call function
//Sam cycled 30 mins each day in 15 days
calc_calories_burned(30, 15,"cycling");


//M1_L1 > Task 2 
//Saving App

// let savings = 0;
// let goal = 0;

function calc_percentage(savings,goal){
  //computation of percentage
  let percentage = parseFloat(100-((savings/goal)*100))

  //output
  return console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentage}% away from your goal of saving ₱${goal}`)
}

//call function to display output
calc_percentage(7500,10000);