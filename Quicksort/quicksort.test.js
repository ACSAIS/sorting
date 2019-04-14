const quicksort = require('./quicksort.js');
const unsortedArray = [2,17,13,9,1,17];
const sortedArray = [1,2,9,13,17,17];

test('[2,17,13,9,1,17] to equal [1,2,9,13,17,17]', () => {
    console.log(quicksort(unsortedArray));
    expect(quicksort(unsortedArray)).toEqual(sortedArray);
});
