class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        onst freq: number[][] = new Array(nums.length + 1);
    const dict: Record<number, number> = {};

    for (const num of nums) {
        dict[num] = 1 + (dict[num] ?? 0);
    }

    for (const key in dict) {
        if (freq[dict[Number(key)]]) {
            freq[dict[Number(key)]].push(Number(key));

        }
        else {
            freq[dict[Number(key)]] = [Number(key)];
        }
    }

    const result: number[] = [];

    for (let i = freq.length + 1; i>0; i--) {
        if (freq[i]) {
            result.push(...freq[i])
        }
        
        if (result.length >= k) {
            return result;
        }
    }
    }
}
