import { useState } from 'react';

import ExternalLink from '../single/externalLink';
import Checkbox from '../single/checkbox';
import ModalDialog from '../single/modalDialog';

const OnInput = () => {
	const [changeContext, setChangeContext] = useState(false);
	const [entertainment, setEntertainment] = useState("(Adivinanza) Oro parece, plata no es.");
	const [isOpen, setIsOpen] = useState(false);

	const handleChange = (e) => {
		if (e.target.checked) { setChangeContext(true) } else { setChangeContext(false) }
	}
	const handleSelect = (e) => {
		setEntertainment(e.target.value);
		if (changeContext) { setIsOpen(true) }
	}
	const handleSubmit= (e) => {
		e.preventDefault();
		setIsOpen(true);
	}
	const closeModal = () => {
		setIsOpen(false);
	}

	return (
		<>
		<h4>Criterio 3.3.2. <ExternalLink href="https://www.w3.org/TR/WCAG21/#on-input" contents="Sobre campos de entrada" /> (nivel A)</h4>
		<blockquote>
		<p>Cambiar las opciones de cualquier componente de interfaz de usuario no produce un cambio automático de contexto, a menos que el usuario haya sido avisado del comportamiento antes de utilizar el componente.</p>
		</blockquote>
		<ModalDialog isOpen={isOpen} closeModal={closeModal}
		contentLabel="Entretenimiento"
		content={entertainment} />
		<form onSubmit={handleSubmit}>
		<Checkbox label="Cambiar contexto sin pulsar el botón Enviar" onChange={handleChange} />
		<label>Elige un tipo de entretenimiento:
		<select value={entertainment} onChange={handleSelect}>
		<option value="(Adivinanza) Oro parece, plata no es.">Adivinanza</option>
		<option value="(Trabalenguas) Tres tristes tigres comen trigo en un trigal.">Trabalenguas</option>
		</select>
		</label>
		<input type="submit" value="¡Empieza a divertirte!" />
		</form>
		</>
	)
}

export default OnInput
