const customerArray = [
    {
        firstName: "Sam",

        lastName: "Smith",

        email: "sam.smith@gmail.com"
    },
    {
        firstName: "Tom",

        lastName: "Jones",

        email: "tom.jones@gmail.com"

    },
    {
        firstName: "Jasally",

        lastName: "Matthews",

        email: "jasally.matthews@gmail.com"

    },
    {
        firstName: "wow",

        lastName: "wow",

        email: "wow.wow@gmail.com"

    }
];

$.each(customerArray, function(key, value) {
    $('#customer-table').append('<tr><td>' + value.firstName + '</td> <td>' + value.lastName + '</td> <td>' + value.email + '</td></tr>');
})






