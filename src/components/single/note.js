import { useState } from 'react';

const Note = (props) => {
	const { id, label } = props;
	const [noteBody, setNoteBody] = useState(localStorage.id);
	const handleChange = (e) => {
		setNoteBody(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.id = noteBody;
	}
	return (
		<>
		<details>
		<summary>
		<h4>Nota para {label}</h4>
		</summary>
		<form aria-labelledby={label} onSubmit={handleSubmit}>
		<label>Nota para {label}:
		<textarea rows="4" cols="50" onChange={handleChange}>
		{noteBody}
		</textarea>
		</label>
		<input type="submit" value="Guardar nota" />
		</form>
		</details>
		</>
	)
}

export default Note;
