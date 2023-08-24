const sumAll = function (num1, num2) {
  let total = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  }
  for (
    let i = num1 <= num2 ? num1 : num2;
    i <= (num1 <= num2 ? num2 : num1);
    i++
  ) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
