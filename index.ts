export default function endOfWeek(date: Date): Date {
	if (!(date instanceof Date)) {
		throw new TypeError(
			`Argument must be an instance of Date, got ${typeof date}`,
		)
	}

	const firstDayOfWeek = date.getUTCDate() - date.getUTCDay()
	const lastDayOfWeek = new Date(date)
	lastDayOfWeek.setUTCDate(firstDayOfWeek + 7)

	return lastDayOfWeek
}
