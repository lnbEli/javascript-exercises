const removeFromArray = function (arr, ...value) {
  for (val of value) {
    if (arr.indexOf(val) !== -1) {
      arr.splice(arr.indexOf(val), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
