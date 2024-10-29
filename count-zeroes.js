function countZeroes(arr) {
    // boundaries of search 
    let left = 0;
    let right = arr.length -1;

    // perform binary search to find the first occurrence of 0
    while (left <= right) {
        // calculates the midpoint of the curr search
        const middle = Math.floor((left + right) / 2);

        // checks if the middle elment is the first occurrence of 0
        if (arr[middle] === 0 && (middle === 0 || arr[middle - 1] === 1)) {
            // if true, uses the left over length of array as 0's count 
            return arr.length - middle;
        }
        // if the middle element is 1, the first 0's must be in the right half
        else if (arr[middle] === 1) {
            // move the left boundary to search the right half
            left = middle + 1;
        }
        // otherwise we continue searching in the left half
        else {
            // move the right boundary to the left half
            right = middle -1;
        }
    }
    // if we exit loop with no 0's found, return 0
    return 0;

}

const arr = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(countZeroes(arr)); // Output: 8 (count of 0s)

module.exports = countZeroes