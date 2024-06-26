const reverseString = function(originalText) {
  let reversedText = '';
  for (i = (originalText.length - 1); i >= 0; i--) {
    reversedText += originalText.charAt(i);
  }
  return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
