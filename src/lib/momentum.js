import moment from 'moment';
import 'moment/locale/ru';

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

export { settingMoment };
