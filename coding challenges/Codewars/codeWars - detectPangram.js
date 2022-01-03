function isPangram(string) {
    //first, create an array for the alphabet, using character codes. The first ("alpha") creates an array of numbers that match character codes, and the second creates an array of lowercase letters from those codes.
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphaArray = alpha.map((x) => String.fromCharCode(x));

    //convert the string into an array and make all letters lowercase to match the alphabet array created above.
    var stringArray = Array.from(string.toLowerCase());

    //loop through the alphabet. if the letter is included, keep going. if not, return false. if the whole loop is complete and every letter has been found, return true.
    for (i = 0; i < alphaArray.length; i++) {
        if (stringArray.includes(alphaArray[i])) {
        } else {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));

//alt code - use filter 'every'

function isPangram2(string) {
    const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
  
    return alphabetList.every((letter) => string.toLowerCase().includes(letter));
  }
  console.log(isPangram2("The quick brown fox jumps over the lazy dog."));
