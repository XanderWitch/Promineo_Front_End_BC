//WHILE loops

var cupsOfFlour=0;
while (cupsOfFlour <5) {
    console.log('Scooping a cup of flour into the bowl.');
    cupsOfFlour+=1;
    console.log('There are '+cupsOfFlour+' cups of flour in the bowl.');
}

//FOR loops

//Have three sections inside its parentheses: 1) declaration of
//variables; 2) Boolean expression; 3) postiteration, what happens after the
//loop completes an iteration

for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) {
    console.log('Scooping a cup of flour into the bowl.');
    console.log('There are '+cupsOfFlour+' cups of flour in the bowl.');
}

//i is the most common variable name in a For Loop

for(var i=0; i<10; i++) {
    console.log(i);
}

//Using loops and conditionals together
//the 'i % 3 == 0' means that i is divisible by 3
for (var i=0; i<100;i++) {
    if (i % 3 == 0) {
        console.log(i);
    }    
}


//WHILE LOOP (from video)
let a = 110;

while (a < 10) {
    console.log(a);
    a++;
}

//DO WHILE LOOP
do {
    console.log(a);

} while(a<10);

//MODIFIED FOR LOOPS

//FOR IN LOOP or FOR OF LOOP
//will provide an iteration for every element in an array

let names = ['Sam', 'Tim', 'Hillary']

for(i in names) { //i will start at 0 and increment for us//
    console.log(names[i]);
}

for(i of names) { //will loop through the value itself instead of the index//
    console.log(i);
}

for(i in names) { //i will start at 0 and increment for us, without specifiying
    //the array, it will give just i//
    console.log(i);
}