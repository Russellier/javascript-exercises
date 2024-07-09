const palindromes = function (string) {
  let original = string
                  .split('')
                  .filter(char => {
                    return /[a-zA-Z0-9 ]/.test(char);
                  })
                  .join('')
                  .toLowerCase()
                  .split(' ')
                  .join('');
  let reversed = original
                  .split('')
                  .reverse()
                  .join('');
  return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
