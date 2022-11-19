function pivotIndex(nums: number[]): number {
    let pivot = 0;

    for (; pivot < nums.length; pivot++) {
        const leftNums = nums.slice(0, pivot); // Left of the pivot
        const rightNums = nums.slice(pivot + 1); // Right of the pivot

        const leftSum = leftNums.reduce((sum: number, current: number) => {
            return sum + current;
        }, 0);

        const rightSum = rightNums.reduce((sum: number, current: number) => {
            return sum + current;
        }, 0);

        // console.log(`Values: ${leftSum} <-> ${rightSum}`);

        // If sums match, exit here with output value
        if (leftSum === rightSum) {
            return pivot;
        }
    }

    // Else return "error"
    return -1;
};

export default pivotIndex;

// const inputNums = [1, 7, 3, 6, 5, 6];
// const inputNums = [1, 2, 3];
// const output = pivotIndex(inputNums);

// console.log(`Output: ${output}`);
