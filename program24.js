// Check from three given numbers that two or all of them have the same rightmost digit

let sameLastDigit = (num1, num2, num3) => {
  return (
    num1 % 10 === num2 % 10 ||
    num1 % 10 === num3 % 10 ||
    num2 % 10 === num3 % 10
  );
};

// console.log(sameLastDigit(32,52,42));
console.log(sameLastDigit(32,55,49));
