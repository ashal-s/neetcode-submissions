class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

    let stack: string[] = [];
    let pairs: Record<string, string> = {};

    pairs[')'] = '(';
    pairs[']'] = '[';
    pairs['}' ] = '{';

    for (const b of s) {
        if (b == '(' || b == '[' || b == '{'){
            stack.push(b);
        }
        else if (pairs[b] != stack.at(-1)) {
            return false
        }
        else {
            stack.pop();
        }

    }

    if (stack.length == 0) {
        return true;
    }
    else{
        return false;
    }

    }
}
