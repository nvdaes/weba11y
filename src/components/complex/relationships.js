import { useState } from 'react';
import ExternalLink from '../single/externalLink';
import Checkbox from '../single/checkbox';

const Relationships = () => {
	const [role, setRole] = useState("table");

const handleChange = (e) => {
	if (e.target.checked) { setRole("presentation") } else { setRole("table") }
}
	return (
	<>
		<h4>Criterio 1.3.1. <ExternalLink href="https://www.w3.org/TR/WCAG21/#info-and-relationships" contents="Información y relaciones" /> (nivel A)</h4>
		<p>La información, estructura y relaciones transmitidas de forma perceptible deben definirse de modo que puedan ser interpretadas por distintas herramientas tecnológicas o estar disponibles en texto. En lenguajes como HTML podemos lograrlo usando las etiquetas correspondientes.</p>
		<p>NVDA puede indicar el tipo de elemento sobre el que se encuentra el cursor (por ejemplo, encabezados, listas, celdas de tablas, etc).</p>
		<p>A continuación comprobaremos el efecto de eliminar la información semántica de HTML en una tabla.</p>
		<form>
		<Checkbox label="Eliminar información semántica en tabla" onChange={handleChange} />
		</form>
		<table role={role}>
		<caption>Algunos comandos de NVDA</caption>
		<thead>
		<tr><th>Función</th><th>Teclado de escritorio</th><th>Teclado portátil</th></tr>
		</thead>
		<tbody>
		<tr><td>Lectura continua</td><td><kbd>NVDA+flecha abajo</kbd></td><td><kbd>NVDA+a</kbd></td></tr>
		<tr><td>Leer línea actual</td><td><kbd>NVDA+flecha arriba</kbd></td><td><kbd>NVDA+l</kbd></td></tr>
		<tr><td>Leer título</td><td><kbd>NVDA+t</kbd></td><td><kbd>NVDA+t</kbd></td></tr>
		</tbody>
		</table>
		<p>En los documentos de ayuda de NVDA encontraremos información más detallada sobre estos y otros comandos</p>
		</>
	)
}

export default Relationships;
