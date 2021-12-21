//array method of map

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];



console.log(months);

//map method
//we want to change all elements in the array to be lowercase

//syntax const map1 = array1.map(x => x* 2);
//the x here takes on the value of each element as you loop through the values in your array

const lowercasemonths = months.map(x => x.toLowerCase());
console.log(lowercasemonths);

//reduce function - filter a big array down to a smaller one meeting a certain condition

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array1.reduce(reducer));


//if you can do it with a for loop, go ahead unless a method is called for

//break down problems step by step in comments
//test after each step


//if you're feeling behind, you can be a little late. Try to go back and start over and look at
//your calendar, adjust it. Schedule mentor sessions, come to office hours if you can.

