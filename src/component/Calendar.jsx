import React from 'react';
import HeaderCalendar from './HeaderCalendar';
import {
	settingMoment,
	daysEnum,
	createDateList,
	isToday,
	isCurrentMonth,
} from '../lib/moment';
import { isWeek } from '../utils/calendar.operators';

export function Calendar(props) {
	const daysArray = createDateList();

	let enumDays = daysEnum();

	/**
	 * For rendering every table row
	 * @param {*} days
	 * @returns {string}
	 */
	function renderDatesForView(days) {
		const arr = [];

		return days.reduce((acc, _, i) => {
			if (isWeek(i)) {
				acc.push(renderDays(i, arr));
				arr.length = 0;
			}
			arr.push(days[i]);

			return acc;
		}, []);
	}

	/**
	 *
	 * @param {*} day
	 */
	function defineTdClassList(day) {
		let classList = '';
		if (isToday(day)) {
			classList += 'ui-datepicker-today';
		}
		if (!isCurrentMonth(day)) {
			classList += 'ui-datepicker-other-month';
		}
		return classList;
	}

	/**
	 * For rendering each table row
	 * @param {number} key
	 * @param {*} days
	 * @returns {string}
	 */
	function renderDays(key, days) {
		return (
			<tr key={key}>
				{days.map(day => (
					<td className={defineTdClassList(day)} key={day.format('DDMMYYYY')}>
						{day.format('D')}
					</td>
				))}
			</tr>
		);
	}

	settingMoment();

	return (
		<div className='ui-datepicker'>
			<HeaderCalendar />
			<table className='ui-datepicker-calendar'>
				<colgroup>
					{[1, 2, 3, 4, 5, 6, 7].map(col => {
						return col < 6 ? (
							<col key={col} />
						) : (
							<col className='ui-datepicker-week-end' key={col} />
						);
					})}
				</colgroup>
				<thead>
					<tr>
						{enumDays.map(day => {
							return (
								<th scope='col' title={day} key={day}>
									{day}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>{renderDatesForView(daysArray)}</tbody>
			</table>
		</div>
	);
}
