 const removeFromArray = function (array, ...others) {
    const newArray = [];
    array.forEach((items) => {
        if (!others.includes(items)) {
            newArray.push(items);
        }
    })
    return newArray;
 };



// Do not edit below this line
module.exports = removeFromArray;
