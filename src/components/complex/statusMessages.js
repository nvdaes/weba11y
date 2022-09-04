import { useState } from 'react';
import ExternalLink from '../single/externalLink';

const data = [
	{id: 1, name: "armario"},
	{id: 2, name: "mesa"},
	{id: 3, name: "silla"},
	{id: 4, name: "sillón"},
	{id: 5, name: "sofá"}
]

const List= (props) => {
	const {submitText} = props;
	const filtered = data.filter((element) => {
		if (!submitText) {
			return element;
		}
		return element.name.toLowerCase().includes(submitText);
	});

	return (
		<>
		<p role="status" aria-atomic="true">(Resultados de la búsqueda: {filtered.length})</p>
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
	const handleChange = (e) => {
		setSearchText(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitText(searchText.toLowerCase());
	}
	return (
		<>
		<h4>Criterio 4.1.3. <ExternalLink href="https://www.w3.org/TR/WCAG21/#status-messages" contents="Mensajes de estado" /> (nivel A)</h4>
		<blockquote>
		<p>Para contenido implementado mediante lenguajes de marcado, los mensajes de estado pueden ser interpretados por distintas herramientas tecnológicas por medio del rol o las propiedades, de modo que puedan ser mostrados al usuario por las tecnologías de apoyo sin recibir el foco.</p>
		</blockquote>
		<form onSubmit={handleSubmit}>
		<label>Introducir texto para buscar (muebles):
		<input type="search" role="search" id="search" onChange={handleChange} />
		</label>
		<input type="submit" value="Buscar" />
		</form>
		<List submitText={submitText}/>
		</>
	)
}

export default StatusMessages;
