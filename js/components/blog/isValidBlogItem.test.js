import { openCloseSidebarDropdown } from '../sidebar/openCloseSidebarDropdown.js';
import { isValidBlogItem } from './isValidBlogItem.js';

describe('Testing data format', () => {
    test('Is invalid if empty string is provided to a "picture" key', () => {
        const tester = {
            picture: '',
            heading: 'not empty',
            description: 'not empty',
        };
        expect(isValidBlogItem(tester)).toBeFalsy();
    });

    test('Is invalid if empty string is provided to a "heading" key', () => {
        const tester = {
            picture: 'not empty',
            heading: '',
            description: 'not empty',
        };
        expect(isValidBlogItem(tester)).toBeFalsy();
    });

    test('Is invalid if empty string is provided to a "description" key', () => {
        const tester = {
            picture: 'not empty',
            heading: 'not empty',
            description: '',
        };
        expect(isValidBlogItem(tester)).toBeFalsy();
    });

    test('Is invalid if number provided to a key', () => {
        const tester = {
            picture: 'not empty',
            heading: 'not empty',
            description: 1,
        };
        expect(isValidBlogItem(tester)).toBeFalsy();
    });

    test('Is invalid if boolean provided to a key', () => {
        const tester = {
            picture: true,
            heading: 'not empty',
            description: 'not empty',
            aKey: 'asd',
        };
        expect(isValidBlogItem(tester)).toBeFalsy();
    });

    test('Is invalid if more than 3 keys', () => {
        const tester = {
            picture: 'not empty',
            heading: 'not empty',
            description: 'not empty',
            aKey: 'asd',
        };
        expect(isValidBlogItem(tester)).toBeFalsy();
    });

    test('Is invalid if less than 3 keys', () => {
        const tester = {
            picture: 'not empty',
            heading: 'not empty',
        };
        expect(isValidBlogItem(tester)).toBeFalsy();
    });

    test('Is invalid if array is given', () => {
        const tester = [
            {
                picture: 'not empty',
                heading: 'not empty',
                description: 'not empty',
            },
        ];
        expect(isValidBlogItem(tester)).toBeFalsy();
    });

    test('Is valid if correct data is provided', () => {
        const tester = {
            picture: 'not empty',
            heading: 'not empty',
            description: 'not empty',
        };
        expect(isValidBlogItem(tester)).toBeTruthy();
    });
});
