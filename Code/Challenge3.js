// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;
// console.log('dolphins average =' + avgDolphins + 'Koalas average =' + avgKoalas);
// //This will output the average number of dolphins and koalas in a single line,
// if (avgDolphins > avgKoalas) {
//     console.log('Dolphins win');
// }
// else if (avgKoalas > avgDolphins) {
//     console.log('Koalas win');
// }
// else if (avgDolphins === avgKoalas) {
//     console.log("It's a tie");
// }

// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;

const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

console.log('dolphons average =' + avgDolphins + 'Koalas average =' + avgKoalas);
//This will output the average number of dolphins and koalas in a single line,
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
console.log('Dolphins win');
}
else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
console.log('Koalas win');
}
else if (avgDolphins === avgKoalas && avgKoalas >= 100 && avgDolphins >= 100) {
console.log("It's a tie");
}
else {
console.log("Y'all are both losers");
}