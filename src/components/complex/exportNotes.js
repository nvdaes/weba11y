import { useState } from 'react';

import ModalDialog from '../single/modalDialog';

const Dialog = () =>{
	const [outputText, setOutputText] = useState("");
	const [fileData, setFileData] = useState("");

	const handleChange = (e) => {
		const fileReader = new FileReader();
		fileReader.onload = async () => {
		await setFileData(fileReader.result);
		await setOutputText("Cargado");
	}
		fileReader.readAsText(e.target.files[0]);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			const json = JSON.parse(fileData);
			Object.entries(json).forEach(([key, value]) => {
				localStorage.setItem(key, value);
			});
			setOutputText("Notas importadas. Podrás ver las nuevas notas cuando recargues la página.");
		} catch(err) {
			setOutputText(err);
		}
	}

	return (
		<>
		<h1>Descargar e importar notas</h1>
		<h2>Descarga directa de notas</h2>
		<p><a download="nvda.json" href={`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(localStorage))}`}>Descargar notas</a></p>
		<h2>Importar notas</h2>
		<form onSubmit={handleSubmit}>
		<label>Archivo de notas para importar:
		<input type="file" accept=".json" required onChange={handleChange} />
		</label>
		<output>{outputText}</output>
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
		<button onClick={handleClick}>descargar e importar notas</button>
		<ModalDialog isOpen={isOpen} closeModal={closeModal} contentLabel='Descargar e importar notas' content={<Dialog />} />
		</>
	)
}

export default ExportNotes;
