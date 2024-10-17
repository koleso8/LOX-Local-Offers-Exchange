export const ageFormatter = ages => {
  if (ages === 0 || (ages >= 5 && ages <= 20)) return `${ages} років`;
  const age = ages.toString().slice(-1);
  console.log(age);

  if (+age === 1) return `${ages} рік`;
  if (+age > 1 && age < 5) return `${ages} роки`;
  if (+age === 0 || age >= 5) return `${ages} років`;
};
