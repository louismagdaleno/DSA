const uniq = require('./index');

describe('uniqSort', () => {
    it('is defined', () => {
        expect(uniq.uniqSort).toBeDefined();
    });

    it('returns a unique sorted array', () => {
        const expected = [2,3,4];
        const actual = uniq.uniqSort([2,3,4,2,3,4]);

        expect(actual).toStrictEqual(expected);
    });

    
})