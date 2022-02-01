// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
var input =  [[59, 12],[55,-1],[12, -2],[12, 12]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

var output = [];

//outer elements (rows)
// for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input[i].length; j++) {
//         console.log(input[i][j]);
//         if (input[i][j] >= 55 && input[i][j+1] > 7) {
//             output.push('Senior');
//         } else {
//             output.push('Open');
//         }
//     }
// }
// console.log(output);

//for searching - looping through multidimensional arrays

var i = 0;
var age
var handicap
input.forEach(
    function (row) {
        row.forEach(function (element) {
            i++;
            if (i === 1 && element >= 55) {
                age = 'Senior';
            }
            if (i === 2 && element > 7) {
                handicap = 'Senior'
            }
        });
        if (age === 'Senior' && handicap === 'Senior') {
            output.push('Senior');
        } else {
            output.push('Open');
        }
        age = ''
        handicap =''
        i = 0;
        });

// Solution from Codewars (this one wouldn't accept input?)

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
