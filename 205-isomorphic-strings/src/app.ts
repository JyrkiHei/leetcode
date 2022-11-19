

function isIsomorphic(s: string, t: string): boolean {
    let tester: Map<string, string> = new Map();

    for (let i = 0; i < s.length; i++) {
        const char1 = s.substring(i, i + 1);
        const char2 = t.substring(i, i + 1);

        if (i == 0) {
            tester.set(char1, char2);
        } else {
            if (!tester.has(char1)) {
                // Have to check if tester values have the character?
                for (let value of tester.values()) {
                    if (value == char2) {
                        return false;
                    }
                }
                tester.set(char1, char2);
            } else {
                if (tester.get(char1) !== char2) {
                    return false; // Cannot be same char in tester keys unless value is also same
                }
            }
        }
    }

    return true;
}
console.log(isIsomorphic('badc', 'baba'));

export default isIsomorphic;
