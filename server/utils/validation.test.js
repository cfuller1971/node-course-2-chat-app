const expect = require('expect');

var {isRealString} = require('./validation')

describe('isRealString', () => {

	it('should reject non-string values', () => {
		var int = 24456;
		var str = isRealString(int);

		expect(str).toBe(false);
	});

	it('should reject string with only spaces', () => {
		var spaces = '        ';
		var str = isRealString(spaces);

		expect(str.length).toBeUndefined;
	});

	it('should allow string with non-space characters', () => {
		// var string = 'Carl';
		var str = isRealString('  Carl Fuller  ');

		expect(str).toBe(true);
	});

});