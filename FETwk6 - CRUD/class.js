// Evan is using a program called JSON Server to make fake requests

// async function main() {
//     //post request - add something to the server, second argument is properties of the request
//     const postResponse = await fetch("https://localhost:3000/posts"), {
//         method: "POST",
//         body: JSON.stringify({
//             title: "foo",
//             author: "evan2",
//         }), //what you're sending to the server, send as JSON (stringify) - don't pass in an id, it's created for you
//         headers: {
//             "Content-type": "application/json; charset=UTF-8" //tells server what we're using - json, UTF-8 characters
//         }
//     }

    const responseFromFetch = await fetch("https://localhost:3000/posts/3"); //fetch will make a request with GET to a URL; fetch returns a promise, we'll await it and then assign it to a variable.
    const jsonResponse = await responseFromFetch.json(); //await the request then 'parse' it as JSON
    console.log(jsonResponse);
    
// //can use Network tab of dev tools (only records events when dev tools is open, split into Headers, Payload, Preview/ Response, )

// }



main();

