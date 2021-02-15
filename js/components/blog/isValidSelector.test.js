import { isValidSelector } from './isValidSelector.js';

describe('Testing selector validity', () => {
    test('Is invalid if a number is given as a selector', () => {
        const tester = 1;
        expect(isValidSelector(tester)).toBeFalsy();
    });

    test('Is invalid if boolean is given as a selector', () => {
        const tester = false;
        expect(isValidSelector(tester)).toBeFalsy();
    });

    test('Is invalid if an empty string is given as a selector', () => {
        const tester = '';
        expect(isValidSelector(tester)).toBeFalsy();
    });

    test('Is invalid if given selector does not exist', () => {
        document.body.innerHTML = '<body><header></header></body>';
        const tester = 'header nav';
        expect(isValidSelector(tester)).toBeFalsy();
    });

    test('Is valid if a correct selector is provided', () => {
        document.body.innerHTML = '<header><nav></nav></header>';
        const tester = 'header nav';
        expect(isValidSelector(tester)).toBeTruthy();
    });
});
