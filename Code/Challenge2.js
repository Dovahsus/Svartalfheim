let weightM = 95;
let heightM = 1.88;
bmiMark = (weightM / (heightM ** 2));
let weightJ = 85;
let heightJ = 1.76;
bmiJohn = (weightJ / (heightJ ** 2));
if (bmiMark > bmiJohn) {
    console.log("Mark has a higher BMI than John");
}
else if (bmiMark < bmiJohn) {
    console.log(`John (${bmiJohn}) has a higher BMI than Mark (${bmiMark})`)
}
else {
    console.log("Both Mark (${bmiMark}) and John (${bmiJohn}) have the same BMI");
};

function compareBMI(m, j) {
    let bmiM = (m.weight / (m.height ** 2));
    let bmiJ = (j.weight / (j.height ** 2));
    if (bmiM > bmiJ) {
        return 'Mark is fatter than John';
    } else if (bmiM < bmiJ) {
        return 'John is fatter than Mark';
    } else {
        return 'They have the same BMI'
    };
}
console.log(compareBMI({ weight: weightM, height: heightM }, {
    weight: weightJ,
    height: heightJ
})
);
console.log(bmiMark);
console.log(bmiJohn);