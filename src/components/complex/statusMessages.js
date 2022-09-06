import { useState } from 'react';
import ExternalLink from '../single/externalLink';
import Checkbox from '../single/checkbox';

const data = [
	{id: 1, name: "armario"},
	{id: 2, name: "mesa"},
	{id: 3, name: "silla"},
	{id: 4, name: "sillón"},
	{id: 5, name: "sofá"}
]

const List= (props) => {
	const {submitText, reportResults} = props;
	const filtered = data.filter((element) => {
		if (!submitText) {
			return element;
		}
		return element.name.toLowerCase().includes(submitText);
	});

	return (
		<>
		<p role={reportResults} aria-atomic="true">(Número de elementos: {filtered.length})</p>
		<ul>
		{filtered.map((item) => (
		<li key={item.id}>{item.name}</li>
		))}
		</ul>
		</>
	)	
}

const StatusMessages = () => {
	const [searchText, setSearchText] = useState("");
const [submitText, setSubmitText] = useState("");
const [reportResults, setReportResults] = useState("status");
	const handleCheckboxChange = (e) => {
		if (e.target.checked) {
			setReportResults("presentation");
		} else {
			setReportResults("status");
		}
	}
	const handleTextboxChange = (e) => {
		setSearchText(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitText(searchText.toLowerCase());
	}
	const handleReset = (e) => {
		setSubmitText("");
	}
	return (
		<>
		<h4 id="statusMessages">Criterio 4.1.3. <ExternalLink href="https://www.w3.org/TR/WCAG21/#status-messages" contents="Mensajes de estado" /> (nivel AA)</h4>
		<blockquote>
		<p>Para contenido implementado mediante lenguajes de marcado, los mensajes de estado pueden ser interpretados por distintas herramientas tecnológicas por medio del rol o las propiedades, de modo que puedan ser mostrados al usuario por las tecnologías de apoyo sin recibir el foco.</p>
		</blockquote>
		<form role="form" aria-labelledby="statusMessages" onSubmit={handleSubmit} onReset={handleReset}>
		<Checkbox label="Silenciar indicación de resultados" onChange={handleCheckboxChange} />		<label>Introducir texto para buscar muebles (requerido):
		<input type="search" required role="search" onChange={handleTextboxChange} />
		</label>
		<input type="submit" value="Buscar" />
		<input type="reset" value="Mostrar todos los elementos (5)" />
		</form>
		<List submitText={submitText} reportResults={reportResults} />
		<aside aria-labelledby="asideSettings">
		<h5 id="asideSettings">Nota sobre opciones de <abbr title="Non Visual Desktop Access">NVDA</abbr></h5>
		<p><kbd>NVDA+5</kbd> activa o desactiva las indicaciones sobre contenido dinámico. Es importante considerar cómo afectan las opciones de configuración a la evaluación de accesibilidad.</p>
		</aside>
		</>
	)
}

export default StatusMessages;
