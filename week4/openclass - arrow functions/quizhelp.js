//The product owner on your development team believes they've seen a pattern as to which customers
//purchase the most socks. To verify, you've been asked to write a function that processes an array
//of customer objects and return a new array that contains only customers that match ANY of the
//following criteria:

//name starts with a 'C' (upper or lowercase)

// address contains no undefined fields

// the city is Peoria and the state is AZ

// membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too

// The array of customer objects will have the following schema:

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
    name: 'Cottage',
    address: {
        street: '1234 W Bell Rd',
        city: 'Peoria',
        zip: '85308',
        state: 'AZ'
    },
    membershipLevel: 'PLATINUM',
    age: 32
},
{
    name: 'Cdog',
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
//more customers with the same schema


// Note: The solution to this problem does not require the use of callbacks. 
function buySocks(customer) {
    for(i = 0; i < customer.length; i++) {
        console.log("in function");
        if (customer.name.startsWith('C')) {
            return true;
        }
    if (city == 'Peoria') {
        return console.log('true');
    
    }

}
buySocks(customers);
}
// let whoBuysMostSocks = customers.filter({
//     name.startsWith === "C" ||
//     address.street === !undefined ||
//     city == 'Peoria' ||
//     state == 'AZ' ||
//     membershipLevel == 'GOLD' || 'PLATINUM' ||
//     membershipLevel === 'SILVER' && age < 29
//     }
//     )

//     console.log(whoBuysMostSocks);

// customers.filter = [];
// filter['name'] = startsWith ['C'];
// filter['address'] = [!undefined];
// filter['city'] = ['Peoria'];
// filter['state'] = ['AZ'];
// filter(['membership level'] == ['GOLD' || 'PLATINUM'] || [age] < 29 && ['membership level'] == 'SILVER')

