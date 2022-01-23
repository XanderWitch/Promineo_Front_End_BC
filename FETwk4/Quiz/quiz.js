
//Event listener to run functions when Create button is clicked.
document.querySelector('#p-button').addEventListener('click', (e) => {
    //Add paragraph to div
    addNewParagraph();
    //Clear Elements from input box
    clearElement('#p-input');
})

function addNewParagraph() {
    const divTarget = document.querySelector('#p-div'); //where we are putting the new paragraph
    const newPara = document.createElement('p');  //create the element are we putting around the new paragraph
    const newText = document.querySelector('#p-input').value; //get the value (text) of the new paragraph
    newPara.innerHTML = newText; //redefine newPara to include the text
    divTarget.appendChild(newPara); //append the paragraph to it's parent
}


function clearElement() {
    //function for clearing element when the button is clicked
    document.querySelector('#p-input').value = ''; //set the input value back to blank
}

