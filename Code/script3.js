'use script';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log('My name is Dubem');
// }
// // Calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(2004);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(2006);
// console.log(age1, age2);

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2008);
// console.log(age3);

// const yearsToRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsToRetirement(1991, 'Jonas'));
// console.log(yearsToRetirement(1980, 'Bob'));


// function cutFruitPieces(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples, oranges) {
// const applePieces = cutFruitPieces(apples);
// const OrangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// fruitProcessor(2,3);


// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// const yearsToRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if(retirement > 0 ){
//                console.log(`${firstName} retires in ${retirement} years`);
//  return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
        
//         return -1;
//     }
    
//     // return `${firstName} retires in ${retirement} years`;
// }


// console.log(yearsToRetirement(1991, 'Jonas'));
// console.log(yearsToRetirement(1980, 'Bob'));


// function ageCalc(birthYear, firstName){
//     const age4 = 2037 - birthYear;
//     console.log(`${firstName} is 
//     ${age4} years old`);
//     return age4;
// }

// const age4 = ageCalc(1991, 'Jonas')

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends.length);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const Jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
// console.log(Jonas);

// // exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearz = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(yearz[0]);
// const age2 = calcAge(yearz[1]);
// const age3 = calcAge(yearz[2]);
// console.log(age1, age2, age3);

// const ages = [calcAge(yearz[0]), calcAge(yearz[1]), calcAge(yearz[yearz.length - 1])];
// console.log(ages);

// const friends = ['Micheal', 'Steven', 'Peter'];

// Add Elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));

 