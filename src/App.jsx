import { Calendar } from './component/Calendar';

function App() {
	const now = new Date();

	return (
		<div className='App'>
			<Calendar date={now} />
		</div>
	);
}

export default App;
