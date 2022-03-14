import {
	makeUppercase,
	replaceSpaces,
	limitLength,
} from '../scripts/helpers/stringHelpers.ts';

test('makes the text uppercase', () => {
	expect(makeUppercase('tRonD')).toBe('TROND');
});

test('Replaces spaces with _', () => {
	expect(replaceSpaces('hello there')).toBe('hello_there');
});

test('removes the first two letters in the word', () => {
	expect(limitLength(3, 'Trond')).toBe('Tro');
});
