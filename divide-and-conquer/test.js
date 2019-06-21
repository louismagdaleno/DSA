const conquer = require('./index');

describe('linearSearch', () => {
    it('is defined', () => {
        expect(conquer.linearSearch).toBeDefined();
    });

    it('returns true when item is found', () => {
        expect(conquer.linearSearch([2,6,7,90,103], 90)).toBe(3);
    });
});

