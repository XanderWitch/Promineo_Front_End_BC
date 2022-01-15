document.getElementById('content').innerHTML = 'Goodbye.' //text inside opening and closing tags of elment

let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => { //addEventListener takes two parameters: the event and the function that is going to execute on the event
    if (content.innerHTML == "Goodbye.") {
        content.innerHTML = "Hello."
    } else {
        content.innerHTML = "Goodbye."
    }
})

//Remove a paragraph
document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
});

//increment added content id
let id = 0;


//Add an element as a child to a selected parent
document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p'); //takes a string name with the tag name of the new element

    


    // newElement.innerHTML = 'This is a new paragraph.';
    newElement.innerHTML = document.getElementById('new-text').value
    newElement.setAttribute('id', id++); //setAttribute takes 2 parameters, the attribute you want to change and the value you want to change it to
    parent.appendChild(newElement);
    
    //clear document input after action
    document.getElementById('new-text').value = "";

})