const findTheOldest = function(array) {
  const oldest = array.sort((a, b) => {
    if (!a.yearOfDeath) a.yearOfDeath = 2024;
    if (!b.yearOfDeath) b.yearOfDeath = 2024;
    const prev = a.yearOfDeath - a.yearOfBirth;
    const next = b.yearOfDeath - b.yearOfBirth;
    return prev > next ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
