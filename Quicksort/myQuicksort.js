const defaultComparator = require('../defaultComparator');

const myQuicksort = (unsortedArray, comparator = defaultComparator) => {
    const sortedArray = [...unsortedArray];
    const recursiveSort = (start, end) => {
        if (end - start < 1) {
            return;
        }

        let pivot = sortedArray[end];
        let splitIndex = end;

        for (let i = start; i < end; i++) {
            if (splitIndex === i) break;
            const currentValue = sortedArray[i];
            const sort = comparator(currentValue, pivot);

            if (sort === 1) {
                const temp = sortedArray.splice(i,1);
                sortedArray.splice(end, 0, ...temp);
                splitIndex--;
                i--;
            }
        }
        recursiveSort(start, splitIndex - 1);
        recursiveSort(splitIndex + 1, end);
    };

    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
};


module.exports = myQuicksort;
