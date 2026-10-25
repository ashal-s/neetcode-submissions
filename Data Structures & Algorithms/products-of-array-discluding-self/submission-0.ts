class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

    let prefix = 1;
    let ret: number[] = [];

    for (let i=0; i<nums.length; i++) {
        ret[i] = prefix;
        prefix = prefix * nums[i];
    }

    let postfix = 1;

    for (let i=nums.length - 1; i >= 0; i--) {
        ret[i] = ret[i] * postfix;
        postfix = postfix * nums[i];
    }

    return ret;
};
    }
