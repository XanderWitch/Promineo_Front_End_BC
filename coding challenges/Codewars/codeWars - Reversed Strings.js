//Complete the solution so that it reverses the string passed into it.

//***Take Away*** /

function solution(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        console.log(i);
        newStr += str[i];
        console.log(newStr);
    }
    return newStr
}
 
console.log(solution("My name is Inigo Montoya. You killed my father. Prepare to die!"));