let button = document.getElementById('my-button');
console.log(button); //returns "<button id="my-button">Button 1</button>"

let buttonsByTag = document.getElementsByTagName('button'); //string needs to match the text of the tag name of the elements you want to grab.
console.log(buttonsByTag); //returns an array of all the results with all their attributes

let buttonsByClassName = document.getElementsByClassName('my-class');
console.log(buttonsByClassName); //returns an array with results