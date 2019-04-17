const quicksort = require('./quicksort.js');
const unsortedArray = [2,17,13,9,1,17];
const sortedArray = [1,2,9,13,17,17];

test('[2,17,13,9,1,17] to equal [1,2,9,13,17,17]', () => {
    expect(quicksort(unsortedArray)).toEqual(sortedArray);
});

test('[-6,-71,-24,-1,-56,-34] to equal [-71,-56,-34,-24,-6,-1]', () => {
    expect(quicksort([-6,-71,-24,-1,-56,-34])).toEqual([-71,-56,-34,-24,-6,-1]);
});

test('[3,9,0,-7,37,46,8] to equal [-7,0,3,8,9,37,46]', () => {
    expect(quicksort([3,9,0,-7,37,46,8])).toEqual([-7,0,3,8,9,37,46]);
});

test('[2,17,13,9,1,17] to equal [1,2,9,13,17,17]', () => {
    expect(quicksort(unsortedArray)).toEqual(sortedArray);
});
