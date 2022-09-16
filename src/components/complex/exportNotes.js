import { useState } from 'react';

import ModalDialog from '../single/modalDialog';

const DownloadLink = () =>{
	const [loaded, setLoaded] = useState("");
	const [fileData, setFileData] = useState("");
	const handleChange = (e) => {
		const fileReader = new FileReader();
		fileReader.onload = async () => {
		await setFileData(fileReader.result);
		await setLoaded("Cargado");
	}
		fileReader.readAsText(e.target.files[0]);
	}

	const handleClick= (e) => {
		localStorage.clear();
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const json = JSON.parse(fileData);
		Object.entries(json).forEach(([key, value]) => {
			localStorage.setItem(key, value);
		});
	}

	return (
	<>
<a download="nvda.json" href={`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(localStorage))}`}>Descargar notas</a>
<form onSubmit={handleSubmit}>
<label>Archivo de notas:
<input type="file" accept=".json" required onChange={handleChange} />
</label>
<output>{loaded}</output>
<input type="submit" value="Importar notas" />
<label>Borrar notas
<input type="button" onClick={handleClick} />
</label>
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
