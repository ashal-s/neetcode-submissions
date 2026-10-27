class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        if (nums.length < 2) {
            return nums.length;
        }

        const numSet = new Set(nums)
        let max = 0;

        for (const num of numSet) {

            if (numSet.has(num - 1)) {
                continue;
            }

            let count = 1;
            while(numSet.has(num + count)) {
                count ++;
            }
            
            max = Math.max(max, count);
        }

        return max;
    }
}
