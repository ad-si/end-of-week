export default function endOfWeek(date: Date): Date {
	if (!(date instanceof Date)) {
		throw new TypeError(
			`Argument must be an instance of Date, got ${typeof date}`,
		)
	}

	const day = date.getUTCDay()
	const daysUntilSunday = day === 0 ? 0 : 7 - day
	const result = new Date(date)
	result.setUTCDate(date.getUTCDate() + daysUntilSunday)
	result.setUTCHours(23, 59, 59, 999)

	return result
}
