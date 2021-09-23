// Intermadiate: Capitalize
(function() {
        let yourText = "i am a web developer";
        console.log(yourText.charAt(0).toUpperCase() + yourText.substring(1));
    }
    ());

//solution_2
// (function(yourText) {
//         console.log(yourText.charAt(0).toUpperCase() + yourText.substring(1));
//     }
//     ("i am a web developer"));


// Intermadiate: Average grade

function grades(mathG, physicsG, englishG) {
    let sumG = mathG + physicsG + englishG;
    let avgG = (mathG + physicsG + englishG) / 3;
    return "Sum: " + sumG + "\n" + "Average: " + Number(avgG);
}
grades(3, 4, 5);