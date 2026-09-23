class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {


    if (s.length !== t.length) {
        return false
    }

    const dict: Record<string, number> = {}

    for (let sletter of s) {
        dict[sletter] = (dict[sletter] ?? 0) + 1;
    }

    for (let tletter of t) {
        if (!dict[tletter] === undefined) {
            return false
        }
        if (dict[tletter] > 1) {
            dict[tletter]--;
        }
        else if (dict[tletter] === 1) {
            delete dict[tletter];
        }
    }

    if (Object.keys(dict).length == 0) {return true;}
    else {return false;}



    }
}
