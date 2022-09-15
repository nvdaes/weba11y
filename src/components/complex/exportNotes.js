import { useState } from 'react';

import ModalDialog from '../single/modalDialog';

const DownloadLink = () =>{
	const [file, setFile] = useState("");
	const [fileData, setFileData] = useState("");
	const handleChange = (e) => {
		setFile(e.target.files[0])
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(file)
		.then((response) => alert(response))
		.catch((err) => alert(err))
	}
	return (
	<>
<a download="nvda.json" href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(localStorage))}`}>Descargar notas</a>
<form onSubmit={handleSubmit}>
<label>Archivo de notas:
<input type="file" accept="*.json" required />
</label>
<input type="submit" value="Importar notas" />
</form>
</>

	)
}

const ExportNotes = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(true);
	}
	const closeModal = () => {
		setIsOpen(false);
	}
	return (
	<>
	<button onClick={handleClick}>Administrar notas</button>
	<ModalDialog isOpen={isOpen} closeModal={closeModal} contentLabel='Administrar notas' content={<DownloadLink />} />
	</>
	)
}

export default ExportNotes;
