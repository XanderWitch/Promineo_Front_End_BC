//Each ToDo Needs Its Own ID
let id = 0;

//When we create a new task, we need to create a new row and add it to our table
document.getElementById('add').addEventListener('click', () => {
    //get creation date
    let createdDate = new Date(); //current time and date with no argument

    //grab ref to table
    let table = document.getElementById('list');

    //create new row
    let row = table.insertRow(1); //position 1 below headers

    //set attributes for row and insert values
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value

    //Need create button for actions
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';

    //need function for action as defined above
    function createDeleteButton(id) {
        let btn = document.createElement('button');
        btn.className = "btn btn-primary";
        btn.id = id;
        btn.innerHTML = "Complete Task";
        btn.onclick = () => {
            console.log(`Deleting row with id: item-${id}`);
            let elementToDelete = document.getElementById(`item-${id}`);
            elementToDelete.parentNode.removeChild(elementToDelete);
        }
        return btn;
    }



}
)