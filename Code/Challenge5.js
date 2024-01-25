const avgDolphins = (85 + 54 + 41) / 3;
const avgKoalas = (23 + 34 + 27) / 3;

console.log('dolphons average =' + avgDolphins + 'Koalas average =' + avgKoalas);
//This will output the average number of dolphins and koalas in a single line,
if (avgDolphins > avgKoalas && avgDolphins >= (avgKoalas * 2)) {
    console.log('Dolphins win');
}
else if (avgKoalas > avgDolphins && avgKoalas >= (avgDolphins * 2)) {
    console.log('Koalas win');
}
else {
    console.log("Y'all are both losers");
}