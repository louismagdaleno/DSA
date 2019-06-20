const recursion = require('./index');

describe('factorial', () => {
    it('is defined', () => {
        expect(recursion.factorial).toBeDefined();
    });

    it('returns factorial of input', () => {
        expect(recursion.factorial(5).toBe(120));
    });
});

describe('memoizefactorial', () => {
    it('is defined', () => {
        expect(recursion.memoizeFactorial).toBeDefined();
    });

    it('returns factorial of input', () => {
        const fact = recursion.memoizeFactorial();

        expect(fact(5).toBe(120));
    });
});