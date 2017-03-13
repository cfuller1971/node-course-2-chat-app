var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Admin';
		var latitude = '15';
		var longitude = '19';
		var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
		var message = generateLocationMessage(from, latitude, longitude);

		expect(message).toInclude({from, url});
		expect(message.createdAt).toBeA('number');

	});
});