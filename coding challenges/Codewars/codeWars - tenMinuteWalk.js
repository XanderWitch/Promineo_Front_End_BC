//You live in the city of Cartesia where all roads are
//laid out in a perfect grid. You arrived ten minutes
//too early to an appointment, so you decided to take the
//opportunity to go for a short walk. The city provides its
//citizens with a Walk Generating App on their phones -- everytime
//you press the button it sends you an array of one-letter strings
//representing directions to walk (eg. ['n', 's', 'w', 'e']). You
//always walk only a single block for each letter (direction)
//and you know it takes you one minute to traverse one city block,
//so create a function that will return true if the walk the app gives
//you will take you exactly ten minutes (you don't want to be early
//or late!) and will, of course, return you to your starting point.
//Return false otherwise.

var testArray = (['n','s','n','s','n','s','n','s','n','s']);
console.log(testArray);

function isValidWalk(walk) {
  //insert brilliant code here
  //first check that the walk length is exactly 10 b/c 10 blocks = 10 minutes
  if (walk.length !=10) {
    return false;
  }
  //we need to confirm that there are an equal number of 'n' to 's' and 'e' to 'w'
  //so you end up in the same spot. So, we need to loop through the code to count each.
  
  //first declare n, s, e, w as variables
  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;

  //next, create a for loop to run through the array and add up the amounts of each direction
    for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      n++;
    } else if (walk[i] === 's') {
      s++;
    } else if (walk[i] === 'e') {
      e++;
    } else {
      w++;
    }
    }
    // console.log(n, s, e, w);
  //now, lets's make sure that the n-s and e-w are equal
  if (n != s) {
    return false;
  } else if (e != w) {
    return false;
  } else {
    return true;
  }
}

console.log(isValidWalk(testArray))
  

