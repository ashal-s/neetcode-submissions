class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        let ptr1 = 0;

    while (ptr1 < nums.length) {
        let ptr2 = ptr1 + 1;
        
        while (ptr2 < nums.length) {
            if (nums[ptr2] === target - nums[ptr1]){
                return [ptr1, ptr2];
            }

            ptr2++;
        }

        ptr1++;
    }
    }
}
