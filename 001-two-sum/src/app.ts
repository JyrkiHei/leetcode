function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                const tempSum = nums[i] + nums[j];

                if (tempSum === target) {
                    return [i, j];
                }
            }
        }
    }

    // Should not get here
    return [];
};

export default twoSum;