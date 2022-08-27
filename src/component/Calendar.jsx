import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import HeaderCalendar from './HeaderCalendar';
import { settingMoment } from '../lib/momentum';
import { isWeek } from '../utils/calendar.operators';
//
//className='ui-datepicker-today'
export function Calendar(props) {
	/**date begin calendar */
	const startDay = moment().startOf('month').startOf('week');

	const day = startDay.clone().subtract(1, 'day');

	const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

	let enumDays = moment.weekdaysShort();

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
	 * For rendering each table row
	 * @param {number} key
	 * @param {*} days
	 * @returns {string}
	 */
	function renderDays(key, days) {
		return (
			<tr key={key}>
				{days.map(day => (
					<td key={day.format('DDMMYYYY')}>{day.format('D')}</td>
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
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className='ui-datepicker-week-end' />
					<col className='ui-datepicker-week-end' />
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
