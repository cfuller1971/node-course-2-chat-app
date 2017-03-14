var moment = require('moment');

// Jan 1st 1970 00:00:10 am

// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar'];
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(2, 'months');
// console.log(date.format('MMM D, YYYY'));

// 10:35 am (format)
//  6:01 am

// new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var time = moment(createdAt);
console.log(time.format('h:mm a'));
