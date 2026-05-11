import { deepEqual, throws } from "node:assert/strict"
import { test } from "node:test"
import endOfWeek from "./index.js"

test("gets the last day of the week", () => {
	deepEqual(
		endOfWeek(new Date("2016-06-21")),
		new Date("2016-06-26T23:59:59.999Z"),
	)
})

test("gets the last day of the week over month boundary", () => {
	deepEqual(
		endOfWeek(new Date("2016-06-29")),
		new Date("2016-07-03T23:59:59.999Z"),
	)
})

test("gets the last day of the week over year boundary", () => {
	deepEqual(
		endOfWeek(new Date("2015-12-30")),
		new Date("2016-01-03T23:59:59.999Z"),
	)
})

test("returns the same day when input is already Sunday", () => {
	deepEqual(
		endOfWeek(new Date("2016-06-26")),
		new Date("2016-06-26T23:59:59.999Z"),
	)
})

test("returns end-of-day regardless of input time", () => {
	deepEqual(
		endOfWeek(new Date("2016-06-21T15:30:00Z")),
		new Date("2016-06-26T23:59:59.999Z"),
	)
})

test("throws when argument is not a Date", () => {
	throws(() => endOfWeek("2016-06-21" as unknown as Date), TypeError)
})
