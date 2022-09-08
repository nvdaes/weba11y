// https://blog.logrocket.com/using-localstorage-react-hooks/

import { useState, useEffect } from 'react';

const Note = (props) => {
	const { id, label } = props;
	const [note, setNote] = useState(() => {
		const saved = localStorage.getItem({id});
		const initialValue = JSON.parse(saved);
  return initialValue || "";
	});
	let hasComment = note === "" ? "sin comentario": "con comentario";
		const handleChange = (e) => {
		setNote(e.target.value);
	}
	useEffect(() => {
		localStorage.setItem({id}, JSON.stringify(note));
	}, [id, note]);
	return (
		<>
		<details>
		<summary>
		<h4>Nota para {label} ({hasComment}</h4>
		</summary>
		<form aria-labelledby={label}>
		<label>Nota para {label}:
		<textarea rows="4" cols="50" onChange={handleChange}>
			{note}
		</textarea>
		</label>
		<input type="submit" value="Guardar nota" />
		</form>
		</details>
		</>
	)
}

export default Note;
