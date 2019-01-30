import {
	uppercaseFirst,
	guid,
	windowMaxHeight,
	windowMaxWidth,
} from './util';

describe('util', () => {
	it('uppercases first letter in a word', () => {
		const result = uppercaseFirst('example');
		expect(result).toEqual('Example');
	});
	
	it('provides uniq id', () => {
		const id1 = guid();
		const id2 = guid();
		const id3 = guid();
		expect(id1).toHaveLength(36);
		expect(id1 === id2).not.toBe(true);
		expect(id2 === id3).not.toBe(true);
		expect(id3 === id1).not.toBe(true);
	});

	it('windowMaxWidth', () => {
		const result = windowMaxWidth();
		expect(result).toEqual(1024);
	});

	it('windowMaxHeight', () => {
		const result = windowMaxHeight();
		expect(result).toEqual(768);
	});
});
