//Basic_1: Crystal Gazer#
//--- Solution 1
function crystal_Gazer(numberChildren, partnerName, geoLocation, jobTitle) {
    let userInput = `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberChildren}.`;
    return userInput
}
crystal_Gazer(5, "John Mayer", "Manhattan", "Actor");

//--- Solution 2
function crystal_Gazer(nChildren, partnerN, geoL, jobT) {
    return "You will be a " + jobT + " in " + geoL + " and married to " + partnerN + " with " + nChildren + " children.";
}
crystal_Gazer(5, "John Mayer", "Vienna", "Actor")

// Basic_2: Age Calculator
function ageCalculator(current_year, birth_year) {
    var yourAge = current_year - birth_year
    return "You are " + yourAge + " or " + (yourAge - 1);
};

var yourAge = ageCalculator(2021, 1980);

console.log(yourAge);

//basic_3: Age Calculator-improved

function ageCalculator

//basic_4: Degree-Radian Conversion
function convertDToR(degrees) {
    let calcResult = degrees * (Math.PI / 180);
    return calcResult + " radians";
}
convertDToR(calcResult.toFixed(90));

//basic_5: Area and Volume of a box
function calcAreaAndValue(heightB, widthB, depthB) {
    let calcArea = widthB * heightB;
    let calcVolume = widthB * heightB * depthB;
    return `The are of the box is: ${calcArea} \n The volume of the box is: ${calcVolume}`
}
calcAreaAndValue(2, 7, 5);