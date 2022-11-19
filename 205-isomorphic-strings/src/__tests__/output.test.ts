import testFunc from "../app";

describe('Outputs', () => {
    // it('Empty tests', () => {
    //     expect(true).toBeTruthy;
    // });

    it("ex1", () => {
        const input1 = 'egg';
        const input2 = 'add';

        const output = testFunc(input1, input2);

        expect(output).toBe(true);
    });

    it("ex2", () => {
        const input1 = 'foo';
        const input2 = 'bar';

        const output = testFunc(input1, input2);

        expect(output).toBe(false);
    });

    it("ex3", () => {
        const input1 = 'paper';
        const input2 = 'title';

        const output = testFunc(input1, input2);

        expect(output).toBe(true);
    });

    it("ex4", () => {
        const input1 = 'badc';
        const input2 = 'baba';

        const output = testFunc(input1, input2);

        expect(output).toBe(false);
    });
});
