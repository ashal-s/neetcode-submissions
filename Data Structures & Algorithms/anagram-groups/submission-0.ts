class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

    let dict = new Map<string, string[]>();

    for (let str of strs) {
        let sorted = str.split("").sort().join("")
        if (dict.has(sorted)) {
            dict.get(sorted)?.push(str);
        }
        else {
            dict.set(sorted, [str]);
        }
    }

    let retArr = []

    for (const [key, value] of dict) {
        retArr.push(value);
    }
    return retArr;
};
    }
