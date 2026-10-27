class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

            if (nums.length < 2) {
                return nums.length;
            }

            const numSet = new Set<number>(nums)
            let max = 1;
            let count = 1;

            for (let num of nums) {
                count = 1;

                if (numSet.has(num - 1)) {
                    continue;
                }

                while(numSet.has(Number(num + 1))) {
                    count += 1;
                    num += 1
                    numSet.delete(num);
                }
                
                if (count > max) {
                    max = count;
                }
            }

            return max;
        };
}
