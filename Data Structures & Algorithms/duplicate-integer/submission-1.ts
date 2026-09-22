class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let uset = new Set()
    for (let i=0; i<nums.length; i++){
        if (uset.has(nums[i])) {
            return true;
        }
        uset.add(nums[i])
    }
    return false
    }


}
