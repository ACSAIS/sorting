const mergesort = require('../mergesort/mergesort.js');
const fs = require('fs');
const data = fs.readFileSync('./mocks.json');
const tests = JSON.parse(data);
const sort = mergesort;

test(tests[0].description, () => {
    expect(sort(tests[0].unsortedArray)).toEqual(tests[0].sortedArray);
});
test(tests[1].description, () => {
    expect(sort(tests[1].unsortedArray)).toEqual(tests[1].sortedArray);
});
test(tests[2].description, () => {
    expect(sort(tests[2].unsortedArray)).toEqual(tests[2].sortedArray);
});
test(tests[3].description, () => {
    expect(sort(tests[3].unsortedArray)).toEqual(tests[3].sortedArray);
});
test(tests[4].description, () => {
    expect(sort(tests[4].unsortedArray)).toEqual(tests[4].sortedArray);
});



