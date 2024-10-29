function sortedFrequency(array, target) {
    // initialize variables for search boundaries and to increment counter 
    let left = 0;
    let right = array.length - 1;
    let count = 0;

    // performs binary search to find one occurrence of target 
    while (left <= right) {
        // finds middle of the search 
        const middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            // count occurrences of the left side of mid 
            let leftIndex = middle;
            while (leftIndex >= 0 && array[leftIndex] === target) {
                count ++;
                leftIndex --;
            }

            let rightIndex = middle + 1;
            while(rightIndex < array.length && array[rightIndex] === target) {
                count ++;
                rightIndex ++;
            }

            return count;
        }

        else if (array[middle] < target) {
            left = middle + 1;
        }

        else {
            right = middle - 1;
        }
    }

    return count;
}

const array = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
console.log(sortedFrequency(array, target));
module.exports = sortedFrequency