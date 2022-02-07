// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


//My Notes

//Each number should have a space between it.
//The output should be a string.

//You could use switch statement or maybe Unicode.
//'The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.' - MDN Web Docs
//The Unicode value for A is 65, and the alphabet position would be one 1, so to find the alphabet position, you could take the CharCodeAt() value and subtract 64. 65-90 are uppercase and 97 to 122 are lower case.

//sample input

const text = "The sunset sets at twelve o' clock."
for (i = 0; i < text.length; i++) {
    // console.log(text[i] + " " + text.charCodeAt(i));
}

alphabetPosition(text);

function alphabetPosition(text) {
    var newString = ""
    for (i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
            newString += (text.charCodeAt(i) - 64);
            if (i < (text.length - 1)) {
                newString += " ";            
            }
        } else if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123) {
            newString += (text.charCodeAt(i) - 96);
            if (i < (text.length - 1)) {
                newString += " ";            
            }
        }

    }
    
    text = newString.trim();
    return text;
    
}

//CodeWars most popular solutions -

// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map( (c) => c.charCodeAt() - 64)
//     .join(' ');
// }

// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }

//   return result.slice(0, result.length-1);
// }



