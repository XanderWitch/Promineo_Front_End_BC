// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {

  //Step 1 - Declare an array to store the positions of the spaces in the original string. Then, mark them by looping through the string and putting those positions into the new array.
    var spacePositions = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] === " "){
            spacePositions.push(i);
        }
    }

  //Step 2 - Split the original string into words in an array (note that the new spaces won't carry into the new array).
    var splitWordsArray = str.split(" ");
    
  //Step 3 - Reverse each word and return them to a new array.
    //3b - Declare a string to store the results.
    var arrayWithReversedWords = [];   
    for (j = 0; j < splitWordsArray.length; j++) {
        let tempStr = splitWordsArray[j];
        arrayWithReversedWords.push(tempStr.split("").reverse().join(""));
    }

  //Step 4 - Join the new array.
    var joinedStringWithReversedWords = arrayWithReversedWords.join("")

  //Step 5 - Reconfigure the string with the spaces.
    //5a - Declare an empty new string to hold the final results.
        finalString = "";
    
    //5b - Loop through the full string without spaces, adding one character at a time onto the new string.
        for (k = 0; k < joinedStringWithReversedWords.length; k++) {
        finalString += joinedStringWithReversedWords[k];
    
    //5c - Then, if the length of the current new string is equal to the position of a space in the original string, add that space back in now.
        for (l = 0; l < spacePositions.length; l++) {
            if (finalString.length === spacePositions[l]) {
                finalString += " ";
            }
        }
    }

    //Step 6 - Finally, return the final string.
    return finalString;
    }
