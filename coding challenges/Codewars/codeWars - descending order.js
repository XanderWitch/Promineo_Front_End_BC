//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  
  //you can use split to split a number but only if it's a string first, so convert n to string
  const newN = n + "";

  //split newN into an array of separate numbers;
  const numbers = newN.split('');

  //now, sort the array with sort and then reverse it so it is sorted in descending order
  numbers.sort().reverse();
  

  //put the numbers back together
  const numbersJoined = numbers.join("");

  //turn the string pack into a number
  const parsedValue = parseInt(numbersJoined);
  return parsedValue;
}

