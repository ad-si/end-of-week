'use strict'

module.exports = (date) => {

	console.assert(
		date instanceof Date,
		'Argument must be instance of Date and not ' + date.constructor
	)

	const firstDayOfWeek = date.getUTCDate() - date.getUTCDay()
	const lastDayOfWeek = new Date(date)
	lastDayOfWeek.setUTCDate(firstDayOfWeek + 7)

	return lastDayOfWeek
}
