// // const createFullName = (firstName, lastName) => firstName + " " + lastName;
// // console.log(createFullName('Harry', 'Dresden'));

// // const doubleNumber= (number) => number * 2;
// // console.log(doubleNumber(6));

// // const getEvenNumbers = (array) => {
// //     let evenNumbers = [];
// //     for (let i of array) {
// //       if (i % 2 === 0) {
// //         evenNumbers.push(i);
// //       }
// //     }
// //     return evenNumbers;
// // }
// // console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));

// //The product owner on your development team believes they've seen a pattern as to which customers
// //purchase the most socks. To verify, you've been asked to write a function that processes an array
// //of customer objects and return a new array that contains only customers that match ANY of the
// //following criteria:

// //name starts with a 'C' (upper or lowercase)
// // address contains no undefined fields
// // the city is Peoria and the state is AZ
// // membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
// // The array of customer objects will have the following schema:


const customers = ({}
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
    }
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
    }
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
    }
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
//     //more customers with the same schema
];

// // Note: The solution to this problem does not require the use of callbacks. 


// // filter = {
// //     name: 'C',
// //     address: !undefined,
// //     city: 'Peoria',
// //     state: 'AZ',
// //     membershipLevel: 'GOLD' || 'PLATINUM' || age < 29 && 'SILVER'
// //     }

// // let whoBuysMostSocks = customers.filter(item => {
// //     for(let key in filter) {
// //         if (item[key]=== undefined || item[key] != filter[key])
// //         return false;
// //     }
// //     return true;
// // })
// // console.log(customers);



    
    
// //     //check name starts with C 

// //     //check no undefined fields in address

// //     //check city is Peoria

// //     //check state is AZ

// //     //check membership level is GOLD or PLATINUM or, if age is less than 29, SILVER

// //     //create new array with these items



var filter = {
//    name.startsWith: 'C',
    address: !undefined,
    city: 'Peoria',
    state: 'AZ',
    membershipLevel: 'GOLD'
//        || memershipLevel: 'PLATINUM'
//        || membershipLevel: 'SILVER' && age < 29
    } 

 console.log(customers.filter);


// //I totally got this one wrong, need to figure it out or go over it in class.




