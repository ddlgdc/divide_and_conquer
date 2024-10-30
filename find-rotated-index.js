function findRotatedIndex(array, target) {
    // sets boundaries of search
    let left = 0;
    let right = array.length - 1;

    // continue searching while the left pointer is less than or equal to right pointer 
    while (left <= right) {
        // calculates middle of ther search
        const middle = Math.floor((left + right) / 2);

        // check if the element at middle isd the target
        if (array[middle] === target) {
            // target found return index
            return middle; 
        }

        // determine which side of the array is sorted 
        if (array[left] <= array[middle]) {
            // left side is sorted 
            // check if target is within the bounds of sorted left
            if (array[left] <= target && target < array[middle]) {
                // target is on left side 
                right = middle - 1;
            }

            else {
                left = middle + 1;
            }
        }

        else {
            // right is sorted 
            // check if the target is within the bounds of the sorted right side '
            if (array[middle] < target && target <= array[right]) {
                // target is in the right side 
                left = middle + 1;
            }

            else {
                right = middle - 1;
            }
        }
    }

    return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // Output: 1 (index of target 4)
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // Output: 2 (index of target 8)
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // Output: 6 (index of target 3)
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1 (target 14 not found)
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1 (target 12 not found)
module.exports = findRotatedIndex