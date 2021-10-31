//CHALLENGE 1  - Print all even numbers from 0 – 10
//my first try

for(i = 0; i <= 10; i++)
    if(i % 2 == 0) {
        console.log(i);
    }
    
//how'd I do? same solution as found online


//CHALLENGE 2 - Print a table containing multiplication tables
//my first try


for (a = 1; a <=10; a ++) {
    for(b = 1; b <= 10; b++) {
        console.log(a + " x " + b + " = " + (a*b));
           }
}           

//I haven't covered tables yet, but let's use some code from stack overflow to make this into a table.
document.write("<center><table border='3px'>");
for(let c = 1; c <11; c++) {
    document.write("<tr style='height:20px'>");
    for(let d = 1; d < 11; d++) {
        document.write("<td style='width:110px'><center><font size='4'>" + c + ' x ' + d + ' = ' + c*d +"</font></center></td>");
    }
    document.write("</tr>");
} 
document.write("</table></center>");

//not sure why the '1 x's are falling outside the table at the top; posted in Slack for help


//CHALLENGE 3 - Create a length converter function. Let's start with a conversion from kilometers to miles.
//The function should include the input in kilometers and return the answer in miles.

let kms = 6;
let miles = kms * 0.621371;
console.log(kms + " km is equal to " + miles.toFixed(2) + " miles.");

//simple and it worked but with a long decimal
//i changed "miles" in line 40 to "miles.toFixed(2)" to round it to the nearest hundredth

