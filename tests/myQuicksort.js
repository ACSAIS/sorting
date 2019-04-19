const myQuicksort  = require('../Quicksort/myQuicksort.js');
const fs = require('fs');
const data = fs.readFileSync('mocks.json');
const tests = JSON.parse(data);

tests.forEach(({description, unsortedArray, sortedArray}) => {
    test(description, () => {
        expect(myQuicksort(unsortedArray)).toEqual(sortedArray);
    })
});


