import classNames from 'shared/lib/classnames';

describe('classnames', () => {
	test('with only first param', () => {
		expect(classNames('hello')).toBe('hello');
	});
	test('with first stroke and mods', () => {
		expect(classNames('hello', { world: true, earth: false })).toBe(
			'hello world',
		);
	});
	test('with first stroke, empty mods and additional', () => {
		expect(
			classNames('hello', { world: true, earth: false }, ['earth hello']),
		).toBe('hello earth hello world');
	});
	test('with three params ', () => {
		expect(classNames('hello', { world: true, earth: false }, ['hohoho'])).toBe(
			'hello hohoho world',
		);
	});
	test('with undefined', () => {
		expect(
			classNames('hello', { world: true, earth: undefined }, ['hohoho']),
		).toBe('hello hohoho world');
	});
	test('with string', () => {
		expect(
			classNames('hello', { world: true, earth: 'hello' }, ['hohoho']),
		).toBe('hello hohoho world earth');
	});
});
