import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

export default function HeaderCalendar() {
	moment.updateLocale('ru');
	return (
		<>
			<div className='ui-datepicker-material-header'>
				<div className='ui-datepicker-material-day'>
					{moment().format('dddd')}
				</div>
				<div className='ui-datepicker-material-date'>
					<div className='ui-datepicker-material-day-num'>
						{moment().date()}
					</div>
					<div className='ui-datepicker-material-month'>
						{moment().format('MMMM')}
					</div>
					<div className='ui-datepicker-material-year'>{moment().year()}</div>
				</div>
			</div>
			<div className='ui-datepicker-header'>
				<div className='ui-datepicker-title'>
					<span className='ui-datepicker-month'>{moment().format('MMMM')}</span>
					&nbsp;
					<span className='ui-datepicker-year'>{moment().format('YYYY')}</span>
				</div>
			</div>
		</>
	);
}
