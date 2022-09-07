import ExternalLink from "../single/externalLink";
import Note from '../single/note';

const Adaptable = () => {
	return (
		<>
		<h3>Pauta 1.3. <ExternalLink href="https://www.w3.org/TR/WCAG21/#adaptable" contents="Adaptable" /></h3>
		<Note id="adaptable" label="Adaptable" />
		<blockquote>
		<p>Crea contenido que pueda ser presentado de múltiples formas (por ejemplo, diseño más simple) sin perder información o estructura.</p>
		</blockquote>
		<p>En resumen, los criterios de esta pauta establecen lo siguiente.</p>
		<ul>
		<li>La información, estructura y relaciones transmitidas por la presentación (por ejemplo, la apariencia visual del contenido) pueden ser interpretadas por distintas herramientas tecnológicas o están disponibles en texto.</li>
		<li>Debe ser posible determinar la secuencia correcta de lectura.</li>
		<li>Las instrucciones no deben depender únicamente de características sensoriales como forma de los elementos, color, etc.</li>
		<li>No se debe restringir la orientación (por ejemplo, a modo retrato o apaisado) a menos que esta restricción sea esencial.</li>
		<li>Existen requisitos sobre la identificación del propósito de campos para la entrada de datos y de las regiones de la página web.</li>
		</ul>
		<p>Veamos los tres primeros criterios.</p>
		</>
	)
}

export default Adaptable;
