//transportation on vacation from codwars
//book a flight, need a rental car

//try writing a couple of test cases first
 


function rentalCarCost() {
    if(days < 3) {
    //rentalCarCost = days * 40
    return (days * 40);
} else if(days >= 3 && days < 7) {
    //rentalCarCost = (days * 40) -20
    return ((days * 40) -20);
} else {
    //rentalCarCost = (days * 40) - 50
    return ((days * 40) -50);
}
}


console.log(rentalCarCost(1));
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));