/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost = 35;
let dayCounter = 0;
let Monday = document.getElementById("monday");
let Tuesday = document.getElementById("tuesday");
let Wednesday = document.getElementById("wednesday");
let Thursday = document.getElementById("thursday");
let Friday = document.getElementById("friday");


/********* colour change days of the week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

Monday.addEventListener("click", day1);
function day1() {
    Monday.classList.add("clicked");    
    dayCounter += 1;
    calculate();
    Monday.removeEventListener("click", day1);
}


Tuesday.addEventListener("click", day2);
function day2() {
    Tuesday.classList.add("clicked");    
    dayCounter += 1;
    calculate();
    Tuesday.removeEventListener("click", day2);
}

Wednesday.addEventListener("click", day3);
function day3() {
    Wednesday.classList.add("clicked");    
    dayCounter += 1;
    calculate();
    Wednesday.removeEventListener("click", day3);
}

Thursday.addEventListener("click", day4);
function day4() {
    Thursday.classList.add("clicked");    
    dayCounter += 1;
    calculate();
    Thursday.removeEventListener("click", day4);
}

Friday.addEventListener("click", day5);
function day5() {
    Friday.classList.add("clicked");    
    dayCounter += 1;
    calculate();
    Friday.removeEventListener("click", day5);
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clear_button = document.getElementById("clear-button");
clear_button.addEventListener("click", clear );
function clear() {
    Monday.classList.remove("clicked");
    Monday.addEventListener("click", day1);

    Tuesday.classList.remove("clicked");
    Tuesday.addEventListener("click", day2);

    Wednesday.classList.remove("clicked");
    Wednesday.addEventListener("click", day3);

    Thursday.classList.remove("clicked");
    Thursday.addEventListener("click", day4);

    Friday.classList.remove("clicked");
    Friday.addEventListener("click", day5);

    dayCounter = 0;
    calculate();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let half_button = document.getElementById("half");
half_button.addEventListener("click", half);
function half() {
    let daily_rate = 20.0;
    half_button.classList.add("clicked");
    full_button.classList.remove("clicked");
    cost = daily_rate;
    calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let full_button = document.getElementById("full");
full_button.addEventListener("click", full);
function full() {
    let daily_rate = 35;
    half_button.classList.remove("clicked");
    full_button.classList.add("clicked");
    cost = daily_rate;
    calculate();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let calculation = document.getElementById('calculated-cost');
    let total_value = cost * dayCounter;  // Add 'let' here
    calculation.innerHTML = total_value;
}