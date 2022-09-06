import { useState, useEffect } from 'react';
import Checkbox from '../single/checkbox';

const AutomaticUpdates = () => {
	const [time, setTime] = useState(0);
	const [freq, setFreq] = useState(1);
	const [running, setRunning] = useState(false);
	const handleChange = (e) => {
		setRunning(e.target.checked);
	}

	const setUpdateFreq = (originalValue) => {
		if (originalValue > 9) { setFreq(9)} else { setFreq(originalValue) }
	}

	useEffect(() => {
		let interval;
		if (running) {
			document.getElementById("frequency").setAttribute("readonly", "readonly");
			interval = setInterval(() => {
				setTime((time) => time + freq * 1000);
		}, freq * 1000);
		} else {
			document.getElementById("frequency").removeAttribute("readonly");
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [running, freq]);

	return(
		<>
		<form role="form" aria-labelledby="time">
		<Checkbox label="Activar cronómetro" onChange={handleChange} />
		<label>Frecuencia de actualización (segundos, entre 1, valor por defecto, y 9)
		<input name="frequency" id="frequency" type="number" min="1" max="9" step	="1"
		onChange={(e) => setUpdateFreq(e.target.value)}
		/>
		</label>
		<output id="timer" aria-atomic="true">{Math.floor(time / 1000)}</output>
		</form>
		</>
	)
}

export default AutomaticUpdates;
