function findFloor(array, x) {
    let left = 0;
    let right = array.length -1;
    let floor = -1; 

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (array[middle] === x) {
            return array[middle];
        }

        else if (array[middle] < x) {
            floor = array[middle];
            left = middle + 1;
        }

        else {
            right = middle - 1;
        }
    }

    return floor;
}

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // Output: 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // Output: 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // Output: -1
module.exports = findFloor