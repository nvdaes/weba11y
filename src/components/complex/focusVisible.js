import ExternalLink from "../single/externalLink";

const FocusVisible = () => {
	return (
		<>
		<h4>Criterio 2.4.7. <ExternalLink href="https://www.w3.org/TR/WCAG21/#focus-visible"
contents="Foco visible" /> (nivel AA)</h4>
		<blockquote>
		<p>Cualquier interfaz manejable mediante el teclado tiene un modo de manejo donde el indicador del foco es visible.</p>
		</blockquote>
		<p>Podemos consultar dónde se encuentra el foco pulsando <kbd>NVDA+tab</kbd>.</p>
		<p>En la guía de <abbr title="Non Visual Desktop Access">NVDA</abbr> se explican las opciones de resaltado visual, que pueden ayudar a identificar dónde se encuentra el foco (el control que puede recibir teclas del sistema), el navegador de objetos (útil, por ejemplo, para explorar contenido al que no puede accederse con el cursor) y el cursor del modo exploración (usado en documentos como páginas web).</p>
		</>
	)
}

export default FocusVisible;
