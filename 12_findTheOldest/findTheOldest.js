    const findTheOldest = function(array) {
        array.forEach(item => (item.yearOfDeath === undefined) 
            ? item.yearOfDeath = new Date().getFullYear() 
            : item.yearOfDeath);
        return array.reduce((oldest, current) => {
            const oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth);
            const currentAge = (current.yearOfDeath - current.yearOfBirth);
            return oldestAge > currentAge ? oldest : current;
        });
    };


// Do not edit below this line
module.exports = findTheOldest;
