//1- Write a function isTallEnough that takes a height (number) in inches, 
//and returns true if the input is greater than or equal to 48, and false if it's less than 48 inches.
//Calling your function should result in:
isTallEnough(72); //true
isTallEnough(28); //false

function isTallEnough(numberininch){
    if(numberininch>=72){return true};
    return false;
}

//2- Write a function isGoodFreethrowShooter that takes a shooting percentage
// (a number you can assume will be between 0 and 1 -- exclusive of 1).
//and returns based on the following criteria:
// If the number is between 0-0.65, return "Horrible freethrow shooter"
// If the number is between 0.65-0.80 return "Decent freethrow shooter"
// If the number is between 0.80-1.00 return "Great freethrow shooter"
// Each range is inclusive of the lower bound, and exclusive of the upper -- in other words, 
//0.65 is counted as a "Decent freethrow shooter" (not "Horrible freethrow shooter") 
//and 0.80 is considered a "Great freethrow shooter" (not "Decent freethrow shooter"). 
//Additionally, you can get a number as high as 0.99, but never 1 
//(this is what the original problem statement means by "exclusive of 1").

function isGoodFreethrowShooter (shotingpercintage){
    if(shotingpercintage>=0 && shotingpercintage < 0.65){return "Horrible freethrow shooter"}
    if(shotingpercintage>=0.65 && shotingpercintage < 0.80){return "Decent freethrow shooter"}
    if(shotingpercintage>=0.8 && shotingpercintage < 1.00){return "Great freethrow shooter"}
}

// Calling your function should result in:

isGoodFreethrowShooter(0.90); //"Great freethrow shooter"
isGoodFreethrowShooter(0.09); //"Horrible freethrow shooter"
isGoodFreethrowShooter(0.75); //"Decent freethrow shooter"