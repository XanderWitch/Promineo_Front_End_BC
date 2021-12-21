//can provide differnt elements with user input to get something fun and useful
//a temporary, basic method - prompts

//var yourname = window.prompt('What is your name?');
//window.alert('Welcome, ' + yourname);

//response to username credentials
//let username = prompt('Username: ');
//let password = prompt('Password: ');

//if (username == 'sammy123' && password == "12345") {
//    alert('Welcome back, ' + username);
//} else {
//    alert('Incorrect username or password.');
//}


//loop to prompt user for correct credentials

var loggedIn = false;

while (!loggedIn){
    let username = prompt('Username: ');
    let password = prompt('Password: ');
    if (username == 'sammy123' && password == "12345") {
        alert('Welcome back, ' + username);
        loggedIn = true;
    } else {
        alert('Incorrect username or password.');
    }
}