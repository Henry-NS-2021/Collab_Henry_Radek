// Solution 1:

// let g = function hhMm(minutes) {
//     let hh = Math.floor(minutes / 60);
//     let mm = minutes % 60;
//     return minutes + " minutes = " + hh + " hour(s) and " + mm + " minutes";
// }
// g(200);

// // Solution 2:
// function hhMm(minutes) {
//     let hh = Math.floor(minutes / 60);
//     let mm = minutes % 60;
//     return minutes + " minutes = " + hh + " hour(s) and " + mm + " minutes";
// }
// hhMm(200);

//Solution 3 (ES6):




var t = (minutes) => {
    return minutes + " minutes = " + Math.floor(minutes / 60) + " hour(s) and " + minutes % 60 + " minute(s)."
}
t(200);