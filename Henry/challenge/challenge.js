//SOLUTION 1:
function atmOutput(amount) {
    var amount = prompt("How much money would you like to withdraw?");
    //$100 bills
    var hundredNote = Math.floor(amount / 100);
    var rest = amount % 100;
    //$50 bills
    var fiftyNote = Math.floor(rest / 50);
    var rest = rest % 50;
    //$20 bills
    var twentyNote = Math.floor(rest / 20);
    var rest = rest % 20;
    //$10 bills
    var tenNote = Math.floor(rest / 10);
    var coins = rest % 10;
    return `You will receive ${hundredNote} note(s) of $100, ${fiftyNote} note(s) of $50, ${twentyNote} note(s) of $20, and ${tenNote} note of $10. \n \nFor the remaining $${coins}, their withdrawal is not possible as we do not have coins in the machine.\n\n`
}
console.log(atmOutput());


//SOLUTION 2:
function atmOutput(amount) {
    var amount = prompt("How much money would you like to withdraw?");
    //$100 bills
    var hundredNote = Math.floor(amount / 100);
    var remains = amount - hundredNote * 100;
    //$50 bills
    var fiftyNote = Math.floor(remains / 50);
    var remains = (amount - hundredNote * 100 - fiftyNote * 50) % 50;
    //$20 bills
    var twentyNote = Math.floor(remains / 20);
    var remains = (amount - hundredNote * 100 - fiftyNote * 50 - twentyNote * 20) % 20;
    //$10 bills
    var tenNote = Math.floor(remains / 10);
    var coins = (amount - hundredNote * 100 - fiftyNote * 50 - twentyNote * 20 - tenNote * 10) % 10;
    return `You will receive ${hundredNote} note(s) of $100, ${fiftyNote} note(s) of $50, ${twentyNote} note(s) of $20, and ${tenNote} note of $10. \n \nSorry, the withdrawal of the remaining $${coins} is not possible: we do not work with coins.\n\n`
}
console.log(atmOutput());