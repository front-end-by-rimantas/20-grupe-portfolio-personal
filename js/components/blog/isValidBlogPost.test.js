import { blogData } from '../../data/blogData.js';
import { isValidBlogPost } from './isValidBlogPost.js';

describe('Testing data format', () => {
    test('Is valid if correct data is provided', () => {
        const tester = {
            selector: '.blog-posts',
            data: blogData,
            limit: 3,
        };
        expect(isValidBlogPost(tester)).toBeTruthy();
    });

    test('Is valid if data is provided as an array with at least one element', () => {
        const tester = {
            selector: '.blog-posts',
            data: [{}],
            limit: 3,
        };
        expect(isValidBlogPost(tester)).toBeTruthy();
    });

    test('Is invalid if limit is < 1', () => {
        const tester = {
            selector: '.blog-posts',
            data: blogData,
            limit: 0,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });

    test('Is invalid if limit is NaN', () => {
        const tester = {
            selector: '.blog-posts',
            data: blogData,
            limit: NaN,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });

    test('Is invalid if limit is infinity', () => {
        const tester = {
            selector: '.blog-posts',
            data: blogData,
            limit: Infinity,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });

    test('Is invalid if limit is > 1, but not an integer', () => {
        const tester = {
            selector: '.blog-posts',
            data: blogData,
            limit: 1.55,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });

    test('Is invalid if data is given as a string', () => {
        const tester = {
            selector: '.blog-posts',
            data: 'not empty',
            limit: 3,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });

    test('Is invalid if data is given as a number', () => {
        const tester = {
            selector: '.blog-posts',
            data: 123,
            limit: 3,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });

    test('Is invalid if data is given as a boolean', () => {
        const tester = {
            selector: '.blog-posts',
            data: false,
            limit: 3,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });

    test('Is invalid if data is provided as an object', () => {
        const tester = {
            selector: '.blog-posts',
            data: {},
            limit: 3,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });

    test('Is invalid if data is provided as an empty array', () => {
        const tester = {
            selector: '.blog-posts',
            data: [],
            limit: 3,
        };
        expect(isValidBlogPost(tester)).toBeFalsy();
    });
});
