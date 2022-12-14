// https://blog.logrocket.com/using-localstorage-react-hooks/

import { useState, useEffect } from 'react';

const Note = (props) => {
	const { id, label } = props;
	const [note, setNote] = useState(() => {
		const saved = localStorage.getItem(id);
		const initialValue = JSON.parse(saved);
  return initialValue || "";
	});
	let hasComment = note === "" ? "sin comentario": "con comentario";
		const handleChange = (e) => {
		setNote(e.target.value);
	}
	useEffect(() => {
		localStorage.setItem(id, JSON.stringify(note));
	}, [id, note]);
	return (
		<>
		<aside aria-labelledby={id}>
		<details>
		<summary>
		<p id={id}>Nota para {label} ({hasComment}</p>
		</summary>
		<form aria-labelledby={id}>
		<label>Nota para {label}:
		<textarea value={note} rows="4" cols="50" onChange={handleChange}>
		</textarea>
		</label>
		</form>
		</details>
		</aside>
		</>
	)
}

export default Note;
