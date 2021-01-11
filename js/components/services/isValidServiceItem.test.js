import { isValidServiceItem } from "./isValidServiceItem.js";

describe('Tikriname duomenu formata', () => {
    test('netinkamas formatas', () => {
        expect(isValidServiceItem()).toBeFalsy();
        expect(isValidServiceItem(true)).toBeFalsy();
        expect(isValidServiceItem(false)).toBeFalsy();
        expect(isValidServiceItem([])).toBeFalsy();
        expect(isValidServiceItem({})).toBeFalsy();
    })

    test('netinkamas objekto raktazodziu tipas', () => {
        expect(isValidServiceItem({ icon: 15, title: '', info: '' })).toBeFalsy();
        expect(isValidServiceItem({ icon: '', title: 51, info: 55 })).toBeFalsy();
        expect(isValidServiceItem({ icon: '', title: '', info: '' })).toBeFalsy();
    })

    test('tinkamas objekto struktura', () => {
        expect(isValidServiceItem({ icon: 'pie', title: 'Chart' })).toBeTruthy();
        expect(isValidServiceItem({ icon: 'tablet', title: 'Tablet' })).toBeTruthy();
    })
})