import moment from 'moment';
import 'moment/locale/ru';

/**
 * For setting moment for RU locale
 */
function settingMoment() {
	moment.updateLocale(
		'ru',
		{
			weekdaysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
		},
		{
			week: {
				dow: 1, // Monday is the first day of the week.
			},
		}
	);
}

/**
 * For getting weekDaysShort
 * @returns {string[]}
 */
function daysEnum() {
	return moment.weekdaysShort();
}

/**
 * For creating dateList from last days before manth
 * current month abd new month
 * @returns {moment.Moment[]}
 */
function createDateList() {
	/**date begin calendar */
	const startDay = moment().startOf('month').startOf('week');

	const day = startDay.clone().subtract(1, 'day');

	return [...Array(42)].map(() => day.add(1, 'day').clone());
}

export { settingMoment, daysEnum, createDateList };
