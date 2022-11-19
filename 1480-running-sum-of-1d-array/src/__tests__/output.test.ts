import testFunc from "../app";

describe('Outputs', () => {
    it('Ex#1', () => {
        const input = [1, 2, 3, 4];
        const output = testFunc(input);

        expect(output).toEqual([1, 3, 6, 10]);
    });

    it('Ex#2', () => {
        const input = [1, 1, 1, 1, 1];
        const output = testFunc(input);

        expect(output).toEqual([1, 2, 3, 4, 5]);
    });

    it('Ex#3', () => {
        const input = [3, 1, 2, 10, 1];
        const output = testFunc(input);

        expect(output).toEqual([3, 4, 6, 16, 17]);
    });
})
