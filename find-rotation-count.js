function findRotationCount(array) {
    let left = 0;
    let right = array.length - 1;

    // handle case so when array is not rotated
    if (array[left] < array[right]) {
        return 0;
    }

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (middle > 0 && array[middle] < array[middle - 1]) {
            return middle;
        }

        if (middle < array.length - 1 && array[middle] > array[middle + 1]) {
            return middle + 1;
        }

        if (array[middle] >= array[left]) {
            left = middle + 1;
        }

        else {
            right = middle - 1;
        }
    }

    return 0;
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // Output: 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // Output: 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // Output: 0
module.exports = findRotationCount