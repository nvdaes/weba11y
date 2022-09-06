import { useState } from 'react';
import ModalDialog from '../single/modalDialog';
import ExternalLink from '../single/externalLink';
import Checkbox from '../single/checkbox';

const Keyboard = () => {
	const [removeFocus, setRemoveFocus] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const handleSubmit = (e) => {
			e.preventDefault();
			setIsOpen(true);
	}
	const closeModal = () => {
		setIsOpen(false);
	}
	const handleFocus = (e) => {
		if (removeFocus) {
			e.target.blur();
		}
	}
	return (
		<>
		<h3 id="keyboard">Pauta 2.1.<ExternalLink href="https://www.w3.org/TR/WCAG21/#keyboard-accessible" contents="Accesible mediante el teclado" /></h3>
		<blockquote>
		<p>Haz que toda la funcionalidad sea accesible mediante el teclado.</p>
		</blockquote>
		<p>En resumen, los criterios de esta pauta establecen que:</p>
		<ul>
		<li>Toda la funcionalidad puede manejarse mediante el teclado sin que se requieran tiempos específicos, excepto cuando se dependa de funciones como la escritura a mano, que requieren gestos distintos de la mera pulsación de teclas.</li>
		<li>Si el foco del teclado puede desplazarse a un elemento mediante una interfaz de teclado, también es  posible salir de él mediante el teclado, lo cual podría ser imposible al usar determinados plugins.</li>
		<li>Debe ser posible desactivar o reasignar accesos directos que consistan en caracteres sin modificadores, usados, por ejemplo, en webs como Twitter, donde se puede pulsar la letra j para desplazarse al siguiente tuit.</li>
		</ul>
		<p>Veamos el efecto de mover el foco fuera de un elemento que puede activarse mediante el teclado al navegar con la tecla <kbd>tab</kbd> (<ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html" contents="(F55)" />.</	p>
		<form role="form" aria-labelledby="keyboard" onSubmit={handleSubmit}>
		<Checkbox label="Mover foco fuera del botón Abrir diálogo de alerta" onChange={(e) => setRemoveFocus(e.target.checked)} />
		<input type="submit" value="Abrir diálogo de alerta"
		onFocus={handleFocus}
		/>
		</form>
		<ModalDialog isOpen={isOpen} closeModal={closeModal} contentLabel="alerta" content="Estamos probando el teclado" />
		</>
	)
}

export default Keyboard;
