const sumAll = function (numA,numB) {
    let totalSum = 0;
    const range = [];
    const args = [...arguments];
    const sortedArgs = args.sort();
        if ((numA + numB) <= 0 || 
            !Number.isInteger(numA) || 
            !Number.isInteger(numB)) {
            return 'ERROR';
        }
        else {
            for (let i = sortedArgs[0]; i <= sortedArgs[sortedArgs.length -1]; i++) {
                range.push(i);
            }
            for (let i = range[0]; i < range.length; i++) {
                range.forEach((item) => {
                totalSum += item;
                })
            return totalSum;
        }
    }
};


// Do not edit below this line
module.exports = sumAll;
