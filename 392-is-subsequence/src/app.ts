function isSubsequence(s: string, t: string): boolean {
    const result = t.split('').reduce((accum, current) => {
        if (s.indexOf(current) > -1) {
            return accum + current;
        } else {
            return accum;
        }
    }, '');

    console.log(s + " - " + result);

    const newResult = s.split('').reduce((accum, current) => {
        return accum + current + "*";
    }, '');

    let regexp: RegExp = new RegExp(newResult);

    return regexp.test(result);
}
console.log(isSubsequence('leeeeetcode', 'leeeeeetcode'));
console.log(isSubsequence('leeeeeetcode', 'leeeeetcode'));

export default isSubsequence;