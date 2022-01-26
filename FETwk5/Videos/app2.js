$.get('https://reqres.in/api/users/2', (data) => console.log(data)); //takes two parameters, a URL and a function (this server is a mock server for testing) (data = data from the request)

$.post('https://reqres.in/api/users', {
    name: "Tammy",
    job: 'Front End Software Developer'
}, (data) => console.log(data)) //post takes 3 parameters: URL, payload (in this case an object), and function
