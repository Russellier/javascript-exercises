const removeFromArray = function(array, toRemove) {
  
  for (let i = 1; i <= arguments.length; i++) {
    array = array.filter((item) => {
      return item !== arguments[i];
    })
  }
  return array;

};
// Do not edit below this line
module.exports = removeFromArray;