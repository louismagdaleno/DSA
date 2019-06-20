const caching = require('./index');

describe('uniqSort', () => {
    it('is defined', () => {
        expect(caching.uniqSort).toBeDefined();
    });

    it('returns a unique sorted array', () => {
        const expected = [2,3,4];
        const actual = caching.uniqSort([2,3,4,2,3,4]);

        expect(actual).toStrictEqual(expected);
    });
});

describe('factorial', () => {
    it('is defined', () => {
        expect(caching.factorial).toBeDefined();
    });
});

describe('times10', () => {
    it('is defined', () => {
        expect(caching.times10).toBeDefined();
    });

    it('multiplies input by 10', () => {
        expect(caching.times10(2)).toBe(20);
        expect(caching.times10(20)).toBe(200);
        expect(caching.times10(5)).toBe(50);
        expect(caching.times10(100)).toBe(1000);
    });
});

describe('memoTimes10', () => {
    it('is defined', () => {
        expect(caching.memoTimes10).toBeDefined();
    });

    it('multiplies input by 10', () => {
        expect(caching.memoTimes10(2)).toBe(20);
        expect(caching.memoTimes10(20)).toBe(200);
        expect(caching.memoTimes10(5)).toBe(50);
        expect(caching.memoTimes10(100)).toBe(1000);
    });
});

describe('memoizedClosureTimes10', () => {
    it('is defined', () => {
        expect(caching.memoizedClosureTimes10).toBeDefined();
    });

    it('multiplies input by 10', () => {
        const times10 = caching.memoizedClosureTimes10();
        expect(caching.times10(2)).toBe(20);
        expect(caching.times10(20)).toBe(200);
        expect(caching.times10(5)).toBe(50);
        expect(caching.times10(100)).toBe(1000);
    });
});