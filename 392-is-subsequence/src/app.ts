function isSubsequence(s: string, t: string): boolean {
    // Go through input string S character by character
    // Try to find first instance of character from s from input string t, remove not suitable characters from t
    // If found, remove character from s & t
    // If not found at all, string is not in Subsequence
    // If string s completely empty, it was found!
    // If string s not empty but t is, it was not found!

    const findThis = s.split('');
    const fromThis = t.split('');

    for (let i = 0; i < findThis.length; i++) {
        if (findThis[i] !== '') {
            for (let j = 0; j < fromThis.length; j++) {
                if (fromThis[j] !== '' && findThis[i] === fromThis[j]) {
                    findThis[i] = '';
                    fromThis[j] = '';
                    break;
                } else {
                    fromThis[j] = '';
                }
            }
        }

        console.log(findThis + " - " + fromThis);
    }

    if (findThis.join('').length === 0) {
        return true;
    }

    return false;



    // const result = t.split('').reduce((accum, current) => {
    //     if (s.indexOf(current) > -1) {
    //         return accum + current;
    //     } else {
    //         return accum;
    //     }
    // }, '');

    // console.log(s + " - " + result);

    // const newResult = s.split('').reduce((accum, current) => {
    //     return accum + current + "*";
    // }, '');

    // let regexp: RegExp = new RegExp(newResult);

    // return regexp.test(result);
}
console.log(isSubsequence('leeeeetcode', 'leeeeeetcode'));
console.log(isSubsequence('leeeeeetcode', 'leeeeetcode'));

export default isSubsequence;