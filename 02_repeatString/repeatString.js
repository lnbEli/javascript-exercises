const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  }
  let combinedStr = "";
  for (let i = 0; i < num; i++) {
    combinedStr = combinedStr + str;
  }
  return combinedStr;
};

// Do not edit below this line
module.exports = repeatString;
