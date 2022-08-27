/**
 * For checking exists day in week
 * @param {number} numDay
 * @returns {boolean}
 */
function isWeek(numDay) {
	return numDay % 7 === 0;
}

export { isWeek };
