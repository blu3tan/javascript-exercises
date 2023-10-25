const palindromes = function (word) {
    const normalize = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reverse = normalize.split('').reverse().join('')
    return (reverse === normalize) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
 