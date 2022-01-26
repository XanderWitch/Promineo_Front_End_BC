//grab body element
//console.log($('body'));

let p = $('#test'); //grab element by id
let div = $('.my-class'); //grab element by class
let ul = $('ul'); //grab element

console.log(p);
console.log(div);
console.log(ul);

console.log(p.text()); //.text is a method on the JQuery object

p.text(''); //if you pass in no argument, this method returns the text

p.text('New Text'); //if you pass in a string argument, it sets the text

$('input').attr('placeholder', 'placeholder text'); //takes two values, the attribute name and the text

div.prepend('<p>PREPENDED paragraph</p>'); //can type out HTML as a string
div.append('<p>APPENDED paragraph</p>');
div.before('<p>paragraph added BEFORE the div</p>');
div.after('<p>paragraph added AFTER the div</p>');

div.empty();
ul.remove();

//hide an element and make it reappear after 3 seconds
$('input').hide();
setTimeout(() => $('input').show(), 3000);//takes a function and a time
