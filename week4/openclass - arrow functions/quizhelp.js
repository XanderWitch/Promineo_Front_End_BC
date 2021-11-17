//The product owner on your development team believes they've seen a pattern as to which customers
//purchase the most socks. To verify, you've been asked to write a function that processes an array
//of customer objects and return a new array that contains only customers that match ANY of the
//following criteria:

//name starts with a 'C' (upper or lowercase)

// address contains no undefined fields

// the city is Peoria and the state is AZ

// membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too

// The array of customer objects will have the following schema:

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    }, //separate objects in array with curly braces and commas

    {
        name: 'Caroline',
        address: {
        street: '1234 W Bell Rd',
        city: 'Peoria',
        zip: '85308',
        state: 'AZ'
    },
    membershipLevel: 'GOLD',
    age: 45
},
{
    name: 'David',
    address: {
        street: '1234 W Bell Rd',
        zip: '85308',
        state: 'NV'
    },
    membershipLevel: 'SILVER',
    age: 32
},
{
    name: 'David',
    address: {
        street: '1234 W Bell Rd',
        city: "New Brunswick",
        zip: '85308',
        state: 'NV'
    },
    membershipLevel: 'SILVER',
    age: 32
},
{
    name: 'cdog',
    address: {
        street: '1234 W Bell Rd',
        city: 'Peoria',
        zip: '85308',
        state: 'AZ'
    },
    membershipLevel: 'SILVER',
    age: 26
}
];
//more customers with the same schema *added**
// Note: The solution to this problem does not require the use of callbacks. 


var buysMostSocks = [];
function buySocks(customer) {

    for(i = 0; i < customer.length; i++) {

        if ((customer[i].name[0].toUpperCase === 'C')
        || (customer[i].address.city === 'Peoria')
        || (customer[i].address.street && customer[i].address.city && customer[i].address.zip && customer[i].address.state)
        || ((customer[i].membershipLevel === 'GOLD')
        || (customer[i].membershipLevel === 'PLATINUM')
        || (customer[i].membershipLevel === 'SILVER' && customer[i].age < 29))
        ) 
       buysMostSocks.push(customer[i]);
    }

    return buysMostSocks;
}

buySocks(customers);
console.log(customers);
console.log(buysMostSocks);

/* it works!!! */


