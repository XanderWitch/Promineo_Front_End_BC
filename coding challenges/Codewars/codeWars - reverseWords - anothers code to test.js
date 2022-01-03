// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//***Take Away*** /

function reverseWords(str) {
    return str.split(' ')
        .map
            (function(word) {
                return word
                .split('')
                .reverse()
                .join('');
            })
    .join(' ');
  }

console.log(reverseWords("My name is Inigo Montoya   You killed my father. Prepare to die!"));