import ExternalLink from "../single/externalLink";

const InputAssistance = () => {
	return (
		<>
		<h3>Pauta 3.3. <ExternalLink href="https://www.w3.org/TR/WCAG21/#input-assistance" contents="Asistencia para la entrada de datos" /></h3>
		<blockquote>
		<p>Ayuda a los usuarios a evitar y corregir errores.</p>
		</blockquote>
		<p>En resumen, los criterios de esta pauta establecen lo siguiente:</p>
		<ul>
		<li>Si se detecta un error al introducir datos,, se identifica el elemento que lo contiene y el error se describe en texto. Si existen sugerencias para corregirlo, también se ofrecerán siempre que sea viable.</li>
		<li>Se proporcionarán etiquetas o instrucciones cuando se requiera introducir datos.</li>
		<li>Al menos en páginas que produzcan compromisos legales o transacciones, envío de datos a sistemas de almacenamiento o respuestas a tests, los envíos serán reversibles, los datos se comprobarán para dar ocasión de corregirlos o existirá un mecanismo para revisar, confirmar y corregir la información antes de enviarla.</li>
		<li>Podrá existir ayuda sensible al contexto.</li>
		</ul>
		<p>Como muestra podemos intentar introducir un valor incorrecto para la <a href="#frequency">frecuencia de actualización del cronómetro</a> (formulario de la pauta 2.2) y observar la respuesta de <abbr title="Non Visual Desktop Access">NVDA</abbr>.</p>
		</>
	)
}

export default InputAssistance;
