// BMI = mass / height ** 2

let weightM = 78;
let heightM = 1.69;

let weightJ = 92;
let heightJ = 1.95;

let markbmi = weightM / heightM ** 2;

let johnbmi = weightJ / heightJ ** 2;

function compareBMI(m, j) {
  let bmiM = m.weight / m.height ** 2;
  let bmiJ = j.weight / j.height ** 2;
  if (bmiM > bmiJ) {
    return 'Mark is fatter than John';
  } else if (bmiM < bmiJ) {
    return 'John is fatter than Mark';
  } else {
    return 'They have the same BMI';
  }
}
console.log(
  compareBMI(
    { weight: weightM, height: heightM },
    {
      weight: weightJ,
      height: heightJ,
    }
  )
);
// My BMI is within normal range so I'm Healthy
