var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

	it('should generate the correct message object', () => {
		// Synchronous test
		// call generateMessage with the from, text vars
		// store res in variable
		// assert from matches value passed in
		// assert text matched value passed in
		// assert createdAt value is a number (toBeA)
		var from = 'Admin';
		var text = 'How YOU doing?';
		var message = generateMessage(from, text);

		// expect(message.from).toBe(from);
		// expect(message.text).toBe(text);
		expect(message).toInclude({from, text});
		expect(message.createdAt).toBeA('number');
	});

});