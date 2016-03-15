'use strict'

const assert = require('assert')
const endOfWeek = require('./index')

{ // Gets the last day of the week
	const date = new Date('2016-06-21')
	assert.deepEqual(endOfWeek(date), new Date('2016-06-26'))
}

{ // Gets the last day of the week over month boundary
	const date = new Date('2016-06-29')
	assert.deepEqual(endOfWeek(date), new Date('2016-07-03'))
}

{ // Gets the last day of the week over year boundary
	const date = new Date('2015-12-30')
	assert.deepEqual(endOfWeek(date), new Date('2016-01-03'))
}

console.log('Passed all tests ✔︎')
