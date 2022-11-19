import pivotIndex from "../app";

describe('Outputs', () => {
    it('With input #1, it should output 3', () => {
        const input = [1, 7, 3, 6, 5, 6];
        const output = pivotIndex(input);

        expect(output).toEqual(3);
    });

    it('With input #2, it should output -1', () => {
        const input = [1, 2, 3];
        const output = pivotIndex(input);

        expect(output).toEqual(-1);
    });

    it('With input #3, it should output 0', () => {
        const input = [2, 1, -1];
        const output = pivotIndex(input);

        expect(output).toEqual(0);
    });

    it('With input #4, it should output 5', () => {
        const input = [-1, -1, 0, 1, 1, 0];
        const output = pivotIndex(input);

        expect(output).toEqual(5);
    });


})
