import { isValidServices } from "./isValidServices.js";

describe('Tikriname duomenu formata', () => {
    test('turi buti duodami parametrai', () => {
        expect(isValidServices()).toBeFalsy();
    })
    test('negali buti skaicius', () => {
        expect(isValidServices(54415)).toBeFalsy();
    })
    test('negali buti tekstas', () => {
        expect(isValidServices('')).toBeFalsy();
        expect(isValidServices('asd')).toBeFalsy();
    })
    test('negali buti boolean tipo', () => {
        expect(isValidServices(true)).toBeFalsy();
        expect(isValidServices(false)).toBeFalsy();
    })
    test('negali buti array tipo', () => {
        expect(isValidServices([])).toBeFalsy();
    })

    test('negali buti tuscias objektas', () => {
        expect(isValidServices({})).toBeFalsy();
    })
    test('objekto selector reiksme turi buti ne tuscias tekstas', () => {
        expect(isValidServices({ selector: 15 })).toBeFalsy();
        expect(isValidServices({ selector: '' })).toBeFalsy();
    })
    test('objekto data reiksme turi buti ne tuscias array', () => {
        expect(isValidServices({ selector: 'body', data: 15 })).toBeFalsy();
        expect(isValidServices({ selector: 'body', data: [] })).toBeFalsy();
    })
    test('objekto limit reiksme turi buti sveikasis skaicius', () => {
        expect(isValidServices({ selector: 'body', data: [{}], limit: 'asdf' })).toBeFalsy();
        expect(isValidServices({ selector: 'body', data: [{}], limit: 0 })).toBeFalsy();
        expect(isValidServices({ selector: 'body', data: [{}], limit: -10 })).toBeFalsy();
        expect(isValidServices({ selector: 'body', data: [{}], limit: 3.14 })).toBeFalsy();
        expect(isValidServices({ selector: 'body', data: [{}], limit: Infinity })).toBeFalsy();
        expect(isValidServices({ selector: 'body', data: [{}], limit: NaN })).toBeFalsy();
    })

    test('tinkamas formatas', () => {
        expect(isValidServices({ selector: 'body', data: [{}], limit: 12 })).toBeTruthy();
        expect(isValidServices({ selector: 'div > p', data: [{ icon: 'globe', title: 'Design' }], limit: 12 })).toBeTruthy();
    })
})